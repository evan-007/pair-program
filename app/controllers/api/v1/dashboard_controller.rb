module Api
  module V1
    class DashboardController < ApplicationController
      before_action :signed_in?

      def index
        @dashboard = Dashboard.new(current_user)
        render json: @dashboard, status: 200, root: false, serializer: DashboardSerializer
      end

      def update
        FbHandler.new.set(current_user)
        render nothing: true, status: 200
      end

    end
  end
end
