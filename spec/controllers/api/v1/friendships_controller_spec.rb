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
      it 'returns an array of friends' do
        get :index
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data["friendships"].length).to eq 2
      end
    end
    context 'without a current user' do
      it 'returns status 401' do
        get :index
        expect(response.status).to eq 401
      end
    end
  end

  describe 'GET #requests' do
    before do
      @user2 = create(:user)
      @friendship = create(:friendship, user_id: @user2.id, friend_id: @user1.id)
    end
    context 'with a current user' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      it 'returns all friend requests' do
        get :requests
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        #so bad, refactor serializer
        expect(data["friendships"][0]["user"]["public_user"]["username"]).to eq @user2.username
      end
    end

    context 'without a current user' do
      it 'returns status 401' do
        get :requests
        expect(response.status).to eq 401
      end
    end
  end

  describe 'POST #approve' do
    before do
      @user2 = create(:user)
      @friendship = create(:friendship, user_id: @user2.id, friend_id: @user1.id)
    end
    context 'with a current user' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      it 'approves the friendship request' do
        expect(@friendship.workflow_state).to eq 'unapproved'
        post :approve, id: @friendship.id
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data["workflow_state"]).to eq 'approved'
        #reload to get new state
        @friendship.reload
        expect(@friendship.workflow_state).to eq 'approved'
      end
    end
    context 'without a current_user' do
      it 'returns status 401' do
        post :approve, id: @friendship.id
        expect(response.status).to eq 401
      end
    end
  end

  describe 'GET #pending' do
    before do
      @user2 = create(:user)
      @friendship = create(:friendship, user_id: @user1.id, friend_id: @user1.id)
    end
    context 'with a current_users' do
      before do
        request.headers["token"] = @user1.token
        request.headers["username"] = @user1.username
      end
      it 'returns pending friendship requests made by the user' do
      end
    end
  end
end
