module Api
  module V1
    class UsersController < ApplicationController
      before_action :signed_in?, only: [:update, :profile]

    	def create
		    @user = User.new(user_params)
		    if @user.save
          render json: @user, status: 200
		    else
          render json: @user.errors, status: 406
		    end
	    end

      def update
        @user = current_user
        if @user.update(user_params)
          render json: @user, status: 200
        else
          render nothing: true, status: 406
        end
	    end

      def index
        @users = User.includes(:languages)
        render json: @users, each_serializer: MapUserSerializer, status: 200
      end

      def profile
        @user = current_user
        render json: @user, serializer: UserProfileSerializer, status: 200
      end

    	private
	      def user_params
	  	    params.require(:user).permit(:email, :password, :password_confirmation,
            :username, :location, language_ids: [])
	      end
    end
  end
end
