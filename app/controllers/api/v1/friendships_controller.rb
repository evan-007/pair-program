module Api
  module V1
    class FriendshipsController < ApplicationController
      before_action :signed_in?

      def index
        @friends = User.find(current_user.friend_ids)
        render json: @friends, status: 200, each_serializer: PublicUserSerializer
      end

      def create
        @friendship = current_user.friendships.build(friendship_params)
        if @friendship.save
          render json: @friendship, status: 200, serializer: FriendSerializer
        else
          render nothing: true, status: 422
        end
      end

      def requests
        @requests = current_user.inverse_friendships.where(workflow_state: 'unapproved')
        render json: @requests, status: 200, each_serializer: UnapprovedFriendshipSerializer
      end

      def update
        if params[:approve].present?
          @request = current_user.inverse_friendships.find(params[:id])
          if @request.approve!
            render json: @request, status: 200
          else
            render nothing: true, status: 400
          end
        elsif params[:reject].present?
          @request = current_user.inverse_friendships.find(params[:id])
          if @request.reject!
            render json: @request, status: 200
          else
            render nothing: true, status: 400
          end
        else
          render nothing:true, status: 400
        end
      end

      def pending
        @pending = User.find(current_user.pending_friends)
        render json: @pending, status: 200, each_serializer: PublicUserSerializer
      end

      private
        def friendship_params
          params.require(:friendship).permit(:friend_id)
        end
    end
  end
end
