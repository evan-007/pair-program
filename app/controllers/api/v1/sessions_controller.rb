module Api
  module V1
    class SessionsController < ApplicationController
      def current
        if session[:user_id]
          @user = User.find(session[:user_id])
          render json: @user, status: 200
        else
          render nothing: true, status: 401
        end
	    end

    	def create
	    	@user = User.find_by(email: params[:email])
		    if @user && @user.authenticate(params[:password])
          render json: @user, status: 200
		    else
          render nothing: true, status: 401
		    end
	    end

    	def destroy
		    session[:user_id] = nil
        render nothing: true, status: 200
	    end
    end
  end
end