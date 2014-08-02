require 'rails_helper'

RSpec.describe Api::V1::FriendshipsController, type: :controller do
  before do
    @user1 = create(:user)
    @user2 = create(:user)
  end

  describe 'POST #create' do
    context 'with a current user' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      context 'with valid params' do
        it 'creates a new friendship' do
          expect(@user1.friends).to eq []
          post :create, friendship: attributes_for(:friendship, friend_id: @user2.id)
          data = JSON.parse(response.body)
          expect(data["friend"]["username"]).to eq @user2.username
          expect(response.status).to eq 200
        end
      end

      context 'with invalid params' do
        it 'renders status 422' do
          expect(@user1.friends).to eq []
          post :create, friendship: attributes_for(:friendship, color: 'red')
          expect(response.status).to eq 422
        end
      end
    end
    context 'without a current user' do
      it 'renders status 401' do
        post :create, friendship: attributes_for(:friendship, friend_id: @user2.id)
        expect(response.status).to eq 401
      end
    end
  end

  describe 'GET #index' do
    before do
      @user3 = create(:user)
      @friendship = create(:friendship, user_id: @user1.id, friend_id: @user2.id)
      @friendship2 = create(:friendship, user_id: @user1.id, friend_id: @user3.id)
      @friendship.approve!
      @friendship2.approve!
    end
    context 'with a current user' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      context 'with params[:type] == "all"' do
        it 'returns an array of friends' do
          get :index, { type: 'all' }
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["friendships"].length).to eq 2
        end
      end
      context 'without params[:type]' do
        it 'returns an array of friends' do
          get :index
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["friendships"].length).to eq 2
        end
      end
      context 'with params[:type] == "requests"' do
        before do
          @user4 = create(:user)
          @friendship2 = create(:friendship, user_id: @user4.id, friend_id: @user1.id)
        end
        it 'returns all friend requests' do
          get :index, type: 'requests'
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          #so bad, refactor serializer
          expect(data["friendships"][0]["user"]["public_user"]["username"]).to eq @user4.username
        end
      end
      context 'with params[:type] == "pending"' do
        before do
          @user5 = create(:user)
          @friendship3 = create(:friendship, user_id: @user1.id, friend_id: @user5.id)
        end
        it 'returns pending friendship requests made by the user' do
          get :index, type: 'pending'
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["friendships"].length).to eq 1
        end
      end
      context 'with params[:type] == "rejected"' do
        before do
          @user6 = create(:user)
          @friendship4 = create(:friendship, user_id: @user6.id, friend_id: @user1.id)
          @friendship4.reject!
        end
        it 'returns friendship requests the user rejected' do
          get :index, type: 'rejected'
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          #sooooo bad
          expect(data["friendships"][0]["user"]["public_user"]["username"]).to eq @user6.username
        end
      end
    end
    context 'without a current user' do
      it 'returns status 401' do
        get :index
        expect(response.status).to eq 401
      end
    end
  end

  describe 'PUT #update' do
    before do
      @user2 = create(:user)
      @friendship = create(:friendship, user_id: @user2.id, friend_id: @user1.id)
    end
    context 'with a current user' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      context 'with params[:approve]' do
        it 'approves the friendship request' do
          expect(@friendship.workflow_state).to eq 'unapproved'
          put :update, id: @friendship.id, approve: 'true'
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["workflow_state"]).to eq 'approved'
          #reload to get new state
          @friendship.reload
          expect(@friendship.workflow_state).to eq 'approved'
        end
      end
      context 'with params[:reject]' do
        it 'rejects the friend request' do
          expect(@friendship.workflow_state).to eq 'unapproved'
          put :update, id: @friendship.id, reject: 'true'
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["workflow_state"]).to eq 'rejected'
          @friendship.reload
          expect(@friendship.workflow_state).to eq 'rejected'
        end
      end
    end
    context 'without a current_user' do
      it 'returns status 401' do
        put :update, id: @friendship.id, reject: 'true'
        expect(response.status).to eq 401
      end
    end
  end
end
