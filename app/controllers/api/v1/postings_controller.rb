module Api
  module V1
    class PostingsController < ApplicationController
      before_action :signed_in?
      before_action :get_posting, only: [:show]

      def index
        @postings = Posting.all
        render json: @postings, root: false, status: 200
      end

      def show
        render json: @posting, root: false, status: 200
      end

      def create
        @posting = current_user.postings.build(posting_params)
        if @posting.save
          render json: @posting, root: false, status: 200
        else
          render nothing: true, status: 400
        end
      end

      private
        def posting_params
          params.require(:posting).permit(:title, :body)
        end

        def get_posting
          @posting = Posting.find(params[:id])
        end
    end
  end
end
