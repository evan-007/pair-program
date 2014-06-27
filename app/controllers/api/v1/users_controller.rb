module Api
  module V1
    class UsersController < ApplicationController
      before_action :signed_in?, only: [:edit]

    	def create
		    @user = User.new(user_params)
		    if @user.save
			    flash[:notice] = "Thanks for signing up"
			    redirect_to root_path
		    else
			    flash[:notice] = "Sorry, please check the form"
			    render :new
		    end
	    end

      def update
	    end

    	private
	      def user_params
	  	    params.require(:user).permit(:email, :password, :password_confirmation,
	  		    :username)
	      end
    end
  end
end