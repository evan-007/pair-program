class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
    def current_user
    	@current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    helper_method :current_user

    def signed_in?
     unless session[:user_id]
       render nothing: true, status: 401
     end
    end
    helper_method :signed_in?
end