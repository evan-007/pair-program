module Api
  module V1
    class SessionsController < ApplicationController

    	def create
	    	@user = User.find_by(email: params[:email])
		    if @user && @user.authenticate(params[:password])
          $firebase.set(@user.id, { messages: @user.unread_messages,
            requests: @user.friend_requests})
          render json: @user, status: 200
		    else
          render nothing: true, status: 401
		    end
	    end

      #api is stateless, TODO remove + spec
    	def destroy
		    session[:user_id] = nil
        render nothing: true, status: 200
	    end
    end
  end
end
