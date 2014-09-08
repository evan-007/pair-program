class Api::V1::ValidationsController < ApplicationController
  def username
    if User.find_by(username: params[:username])
      render nothing: true, status: 400
    else
      render nothing: true, status: 200
    end
  end
end
