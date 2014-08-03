module Api
  module V1
    class UsersController < ApplicationController
      before_action :signed_in?, only: [:update, :profile]

      def map
        @users = User.includes(:languages)
        render json: @users, status: 200, each_serializer: PublicUserSerializer
      end

    	def create
		    @user = User.new(user_params)
		    if @user.save
          WelcomeSender.new(@user).send
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
        if params[:map].present?
          @users = User.includes(:languages)
        elsif current_user
          @users = User.includes(:languages).find(current_user.not_friends)
        end
        render json: @users, root: false, each_serializer: PublicUserSerializer, status: 200
      end

      def profile
        @user = current_user
        render json: @user, serializer: UserProfileSerializer, status: 200
      end

      def show
        @user = User.find(params[:id])
        render json: @user, root: false, serializer: PublicUserSerializer, status: 200
      end

    	private
	      def user_params
	  	    params.require(:user).permit(:email, :password, :password_confirmation,
            :username, :mentor?, :student?, :just_partner?, :location, :language_tokens)
	      end
    end
  end
end
