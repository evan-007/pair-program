require 'rails_helper'

RSpec.describe Verifier, type: :model do
  describe '#friend' do
    before do
      @user = create(:user)
      @user2 = create(:user)
    end
    it 'returns true if two users are friends' do
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      expect(Verifier.new.friend(@user.id, @user2.id)).to eq true
    end
    it 'returns false if two users are not friends' do
      @user3 = create(:user)
      expect(Verifier.new.friend(@user.id, @user3.id)).to eq false
    end
  end

  describe '#active_post' do
    before do
      @user = create(:user)
    end
    it 'returns true if the user has a post matching the id' do
      @posting = @user.postings.create(title: 'this is the title', body: 'here is the body')
      expect(Verifier.new.active_post(@user.id, @posting.id)).to eq true
    end

    it 'return false if the user doesn\'t have a post' do
      expect(Verifier.new.active_post(@user.id, 99)).to eq false
    end
  end

  describe '#message_guard' do
    before do
      @user = create(:user)
      @user2 = create(:user)
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      @posting = @user.postings.create(title: 'this is the title', body: 'here is the body')
    end
    it 'calls #friend when reply == false' do
      expect(Verifier.new.message_guard(@user.id, @user2.id, 'false')).to eq true
    end
    it 'calls #active_post when reply == true' do
      expect(Verifier.new.message_guard(@user.id, @user2.id, 'true', @posting.id)).to eq true
    end
  end
end
