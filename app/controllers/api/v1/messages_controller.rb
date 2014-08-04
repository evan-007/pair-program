module Api
  module V1
    class MessagesController < ApplicationController
      include ActionController::Live

      Mime::Type.register "text/event-stream", :stream

      before_action :signed_in?, :get_box, except: [:count]
      before_action :can_message?, only: [:create]

      def index
        @messages = MailFetcher.new(@box, current_user.id).get
        render json: @messages, root: false, status: 200, each_serializer: MessageSerializer
      end

      #use update instead of show to handle read? updates on show
      def update
        if @box.eql? "inbox"
          @message = current_user.received_messages.find(params[:id])
        else
          @message = current_user.sent_messages.find(params[:id])
        end
        @message.update(read?: true)
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
        response.headers['Content-Type'] = 'text/event-stream'
        begin
          response.stream.write "data: hihihi\n\n"
          sleep 2
          response.stream.close
        rescue IOError
        ensure
          response.stream.close
        end
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
          if FriendVerifier.new.check(current_user, params[:message][:receiver_id]) == false
            render nothing: true, status: 401
          end
        end
    end
  end
end
