require 'rails_helper'

RSpec.describe Api::V1::FriendsController, type: :controller do
  before do
    @user = create(:user)
    @user2 = create(:user)
    @user3 = create(:user)
    @user4 = create(:user)
    @user5 = create(:user)
    @friendship1 = create(:friendship, user_id: @user.id, friend_id: @user2.id)
    @friendship2 = create(:friendship, user_id: @user.id, friend_id: @user3.id)
    @friendship3 = create(:friendship, user_id: @user4.id, friend_id: @user.id)
    @friendship4 = create(:friendship, user_id: @user5.id, friend_id: @user.id)
    @friendship1.approve!
    @friendship3.approve!
    request.headers["token"] = @user.token
    request.headers["username"] = @user.username
  end
  
  describe 'GET index' do
    it 'returns friends from friendships and inverse_friendships' do
      get :index
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(data).to eq [@user2.id, @user4.id]
    end
  end
  
  describe 'GET pending' do
    it 'returns unapproved friend requests the user has made' do
    end
  end
  
  describe 'GET requests' do
    it 'returns all friend requests to the user' do
    end
  end
end