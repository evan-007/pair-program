require 'rails_helper'

RSpec.describe FriendVerifier, type: :model do
  before do
    @user = create(:user)
    @user2 = create(:user)
  end
  context 'reply == false' do
    it 'returns true if two users are friends' do
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      expect(FriendVerifier.new.check(@user.id, @user2.id, 'false')).to eq true
    end
    it 'returns false if two users are not friends' do
      @user3 = create(:user)
      expect(FriendVerifier.new.check(@user.id, @user3.id, 'false')).to eq false
    end
  end
  context 'reply == true' do
    it 'returns true if 2nd user has a posting that matches posting_id' do
      @posting = @user2.postings.create(title: 'something', body: 'something else')
      expect(FriendVerifier.new.check(@user.id, @user2.id, 'true', @posting.id)).to eq true
    end
    it 'returns false if 2nd user doesn\'t have a posting matching posting_id' do
      expect(FriendVerifier.new.check(@user.id, @user2.id, 'true', 'cat')).to eq false
    end
  end
end
