module Api
  module V1
    class MessagesController < ApplicationController
      include ActionController::Live

      before_action :signed_in?, :get_box, except: [:count]
      before_action :get_reply, :can_message?, only: [:create]

      def index
        id = @user.id
        @messages = MailFetcher.new(@box, id).get
        render json: @messages, root: false, status: 200, each_serializer: MessageSerializer
      end

      def update
        id = @user.id
        @message = MailFetcher.new(@box, id).get_one(params[:id])
        if params[:trash].present?
          @message.trash!
        else
          @message.request!
        end
        render json: @message, status: 200, serializer: MessageSerializer
      end

      def create
        @message = @user.sent_messages.build(message_params)
        if @message.save
          render json: @message, status: 200, serializer: MessageSerializer
        else
          render json: @message.errors, status: 400
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
          id = @user.id
          if FriendVerifier.new.check(id, params[:message][:receiver_id], @reply, params[:posting_id]) == false
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
