module Api
  module V1
    class FriendshipsController < ApplicationController
      before_action :signed_in?
      def create
        @friendship = current_user.friendships.build(friendship_params)
        if @friendship.save
          render json: @friendship, status: 200, serializer: FriendSerializer
        else
          render nothing: true, status: 422
        end
      end
      
      
      private
        def friendship_params
          params.require(:friendship).permit(:friend_id)
        end
    end
  end
end