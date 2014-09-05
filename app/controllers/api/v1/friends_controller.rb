module Api
  module V1
    class FriendsController < ApplicationController
      before_action :signed_in?
      def index
        @users = User.find(current_user.friend_ids)
        render json: @users, status: 200, each_serializer: PublicUserSerializer
      end

      def show
        @user = current_user.friends.find(params[:id])
        render json: @user, root: false, status: 200, serializer: ApprovedFriendSerializer
      end
    end
  end
end
