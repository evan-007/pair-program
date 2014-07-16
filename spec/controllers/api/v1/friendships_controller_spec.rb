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
  
  describe 'get #index' do
    before do 
      @user3 = create(:user)
      @friendship = create(:friendship, user_id: @user1.id, friend_id: @user2.id)
      @friendship2 = create(:friendship, user_id: @user1.id, friend_id: @user3.id)
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
        expect(data["friendships"][0]["friend_id"]).to eq @user2.id
      end
    end
  end
end