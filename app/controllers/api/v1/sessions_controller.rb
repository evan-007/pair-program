module Api
  module V1
    class SessionsController < ApplicationController
	    def new
	    end

    	def create
	    	@user = User.find_by(email: params[:email])
		    if @user && @user.authenticate(params[:password])
			    session[:user_id] = @user.id
          render nothing: true, status: 200
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