require 'rails_helper'

RSpec.describe FriendVerifier, type: :model do
  before do
    @user = create(:user)
    @user2 = create(:user)
  end
  
  it 'returns true if two users are friends' do
    @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
    expect(FriendVerifier.new.check(@user.id, @user2.id)).to eq true
  end
  it 'returns false if two users are not friends' do
    @user3 = create(:user)
    expect(FriendVerifier.new.check(@user.id, @user3.id)).to eq false
  end
end