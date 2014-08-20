module Api
  module V1
    class PostingsController < ApplicationController
      before_action :signed_in?
      
      def index
        @postings = Posting.all
        render json: @postings, root: false, status: 200
      end

      def show
        @posting = Posting.find(params[:id])
        render json: @posting, root: false, status: 200
      end
    end
  end
end
