module Api
  module V1
    class MessagesController < ApplicationController
      include ActionController::Live

      before_action :signed_in?, :get_box, except: [:count]
      before_action :get_reply, :can_message?, only: [:create]

      def index
        @messages = MailFetcher.new(@box, current_user.id).get
        render json: @messages, root: false, status: 200, each_serializer: MessageSerializer
      end

      #use update instead of show to handle read? updates on show
      def update
        @message = MailFetcher.new(@box, current_user.id).get_one(params[:id])
        if params[:trash].present?
          @message.trash!
        else
          @message.request!
        end
        render json: @message, status: 200, serializer: MessageSerializer
      end

      def create
        @message = current_user.sent_messages.build(message_params)
        if @message.save
          render json: @message, status: 200, serializer: MessageSerializer
        else
          render json: @message.errors, status: 400
        end
      end

      def count
        #oh god can't pass auth with EventSource

        #is called on login by angular
        #returns count of unread messages
        #stream comes from redis, intialzied with unread_messages
        #new messages to user incr redis value
        #reading messages decr redis value
        #redis key is user.id
        #http://www.slideshare.net/piotrkarbownik5/rails-4-server-sent-events
        @user = User.find(params[:id]) #can't send auth params with EventSource
        response.headers['Content-Type'] = 'text/event-stream'
        response.stream.write "data: #{@user.unread_messages}\n\nj"
        $redis = Redis.new
        $redis.publish("#{@user.id}.messages", @user.unread_messages)
        $redis.subscribe("#{@user.id}.messages") do |on|
          on.message do |event, data|
              response.stream.write("data:#{ data }\n\n")
          end
        end
        rescue IOError
          logger.info("Stream closed")
        ensure
          $redis.quit
          response.stream.close
      end

      private
        def get_box
          if params[:box].blank? or !["inbox","sentbox","trash"].include?params[:box]
            params[:box] = 'inbox'
          end
          @box = params[:box]
        end

        def message_params
          params.require(:message).permit(:receiver_id, :title, :body)
        end

        def can_message?
          if MessageGuard.new.check(current_user, params[:message][:receiver_id], @reply, params[:posting_id]) == false
            render nothing: true, status: 401
          end
        end

        def get_reply
          if params[:reply].blank? or params[:reply] != 'true'
            params[:reply] = 'false'
          end
          @reply = params[:reply]
        end
    end
  end
end
