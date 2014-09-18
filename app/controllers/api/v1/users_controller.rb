module Api
  module V1
    class UsersController < ApplicationController
      before_action :signed_in?, only: [:update]
      def index
        if params[:map].present?
          @users = User.includes(:languages)
        elsif @user
          @users = User.includes(:languages).find(@user.not_friends)
        end
        render json: @users, root: false, each_serializer: PublicUserSerializer, status: 200
      end

    	def create
		    @user = User.new(user_params)
		    if @user.save
          WelcomeSender.send(@user.id)
          WelcomeEmailer.perform_async(@user.id)
          render json: @user, status: 200
		    else
          render json: @user.errors, status: 406
		    end
	    end

      def update
        if @user
          if @user.update(user_params)
            render json: @user, status: 200, serializer: UserProfileSerializer
          else
            render nothing: true, status: 406
          end
        end
	    end

      def show
        if params[:profile].present?
          @user = current_user
          render json: @user, root: false, serializer: UserProfileSerializer, status: 200
        else
          @user = User.find(params[:id])
          render json: @user, root: false, serializer: PublicUserSerializer, status: 200
        end
      end

    	private
	      def user_params
	  	    params.require(:user).permit(:email, :password, :password_confirmation,
            :username, :mentor?, :student?, :just_partner?, :location, :language_tokens, :about)
	      end
    end
  end
end
