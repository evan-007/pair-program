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
end