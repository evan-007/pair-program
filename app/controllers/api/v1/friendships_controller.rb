module Api
  module V1
    class FriendshipsController < ApplicationController
      before_action :signed_in?
      
      def index
        @friends = current_user.friendships
        render json: @friends, status: 200, each_serializer: FriendSerializer
      end
      
      def create
        @friendship = current_user.friendships.build(friendship_params)
        if @friendship.save
          render json: @friendship, status: 200, serializer: FriendSerializer
        else
          render nothing: true, status: 422
        end
      end
      
      def requests
      end
      
   
      private
        def friendship_params
          params.require(:friendship).permit(:friend_id)
        end
    end
  end
end