module Api
  module V1
    class FriendsController < ApplicationController
      before_action :signed_in?
      def index
        @users = User.find(current_user.friend_ids)
        render json: @users, status: 200
      end
    end
  end
end