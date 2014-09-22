require 'rails_helper'

RSpec.describe Verifier, type: :model do
  describe '#friend' do
    before do
      @user = create(:user)
      @user2 = create(:user)
      @user3 = create(:user)
    end
    it 'returns true if two users are friends' do
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      expect(Verifier.new(sender_id: @user.id, receiver_id: @user2.id).friend).to eq true
    end
    it 'returns false if two users are not friends' do
      expect(Verifier.new(sender_id: @user.id, receiver_id: @user3.id).friend).to eq false
    end
    it 'doesn\'t care about user id order' do
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      expect(Verifier.new(sender_id: @user2.id, receiver_id: @user.id).friend).to eq true
      expect(Verifier.new(sender_id: @user3.id, receiver_id: @user.id).friend).to eq false
    end
  end

  describe '#active_post' do
    before do
      @user = create(:user)
    end
    it 'returns true if the receiver has a post matching the id' do
      @posting = @user.postings.create(title: 'this is the title', body: 'here is the body')
      expect(Verifier.new(receiver_id: @user.id, posting_id: @posting.id).active_post).to eq true
    end

    it 'return false if the user doesn\'t have a post' do
      expect(Verifier.new(receiver_id: @user.id, posting_id: '99').active_post).to eq false
    end
  end

  describe '#message_guard' do
    before do
      @user = create(:user)
      @user2 = create(:user)
      @friendship = create(:friendship, friend_id: @user2.id, user_id: @user.id)
      @posting = @user2.postings.create(title: 'this is the title', body: 'here is the body')
    end
    it 'calls #friend when reply == "false"' do
      expect(Verifier.new(sender_id: @user.id, receiver_id: @user2.id, reply: 'false',
       posting_id: @posting.id).message_guard).to eq true
    end
    it 'calls #active_post when reply == "true"' do
      expect(Verifier.new(sender_id: @user.id, receiver_id: @user2.id, reply: 'true',
      posting_id: @posting.id).message_guard).to eq true
    end
  end
end
