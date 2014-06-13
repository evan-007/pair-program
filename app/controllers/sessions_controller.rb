class SessionsController < ApplicationController
	def new
		
	end

	def create
		@user = User.find_by(email: params[:email])
		if @user && @user.authenticate(params[:password])
			session[:user_id] = @user.id
			flash[:notice] = "You're logged in!"
			redirect_to root_path
		else
			flash[:notice] = "Opps, is your password correct?"
			render :new
		end
	end

	def destroy
		session[:user_id] = nil
		flash[:notice] = "Signed out!"
		redirect_to root_path
	end
end
