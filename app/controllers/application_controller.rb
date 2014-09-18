class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  #very dangerous, remove in production
  skip_before_filter :verify_authenticity_token

  #uncomment this and change app_config.yml in production
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
  #is current_user secure? no check for token? assumes signed_in is called first
    def signed_in?
      unless @user
        render nothing: true, status: 401
      end
    end
    helper_method :signed_in?
    #
    # def signed_in?
    #  @user = User.find_by(username: request.headers["username"])
    #  if @user && @user.token = request.headers["token"]
    #    true
    #  else
    #    render nothing: true, status: 401
    #  end
    # end
    # helper_method :signed_in?
end
