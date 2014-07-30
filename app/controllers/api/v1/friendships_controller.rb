module Api
  module V1
    class FriendshipsController < ApplicationController
      before_action :signed_in?
      before_action :get_type, only: :index

      def index
        if @type == "all"
          @friends = User.find(current_user.friend_ids)
          render json: @friends, status: 200, each_serializer: PublicUserSerializer
        elsif @type == 'requests'
          @requests = current_user.inverse_friendships.where(workflow_state: 'unapproved')
          render json: @requests, status: 200, each_serializer: UnapprovedFriendshipSerializer
        elsif @type == 'pending'
          @pending = User.find(current_user.pending_friends)
          render json: @pending, status: 200, each_serializer: PublicUserSerializer
        else
          render nothing: true, status: 400
        end
      end

      def create
        @friendship = current_user.friendships.build(friendship_params)
        if @friendship.save
          render json: @friendship, status: 200, serializer: FriendSerializer
        else
          render nothing: true, status: 422
        end
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

      private
        def friendship_params
          params.require(:friendship).permit(:friend_id)
        end

        def get_type
          if params[:type].blank? or !["all", "pending", "rejected", "requests"].include?params[:type]
            params[:type] = 'all'
          end
          @type = params[:type]
        end
    end
  end
end
