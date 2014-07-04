class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  skip_before_filter :verify_authenticity_token
  #protect_from_forgery with: :null_session
  
  before_filter :set_cors_headers
  before_filter :cors_preflight
  
  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = AppConfig.client['origin']
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Max-Age'] = "3628800"
  end
  
  def cors_preflight
    head(:ok) if request.method == :options
  end
  
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