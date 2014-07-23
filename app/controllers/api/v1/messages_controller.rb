module Api
  module V1
    class MessagesController < ApplicationController
      before_action :signed_in?, :get_box
      
      def index
        if @box.eql? "inbox"
          @messages = current_user.received_messages
        elsif @box.eql? "sentbox"
          @messages = current_user.sent_messages
        else
          @messages = @mailbox.trash
        end
        render json: @messages, status: 200, each_serializer: MessageSerializer
      end
      
      def show
        if @box.eql? "inbox"
          @message = current_user.received_messages.find(params[:id])
        else
          @message = current_user.sent_messages.find(params[:id])
        end
        render json: @message, status: 200, serializer: MessageSerializer
      end
      
      private
        def get_box
          if params[:box].blank? or !["inbox","sentbox","trash"].include?params[:box]
            params[:box] = 'inbox'
          end
          @box = params[:box]
        end
    end
  end
end