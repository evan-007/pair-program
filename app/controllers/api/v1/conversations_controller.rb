module Api
  module V1
    class ConversationsController < ApplicationController
      before_action :signed_in?, :get_box, :get_mailbox
      
      def index
        if @box.eql? "inbox"
          @messages = @mailbox.inbox
        elsif @box.eql? "sentbox"
          @messages = @mailbox.sentbox
        else
          @messages = @mailbox.trash
        end
        render json: @messages, status: 200, each_serializer: ConversationSerializer
      end
      
      private
        def get_box
          if params[:box].blank? or !["inbox","sentbox","trash"].include?params[:box]
            params[:box] = 'inbox'
          end
          @box = params[:box]
        end
        
        def get_mailbox
          @mailbox = current_user.mailbox
        end
    end
  end
end