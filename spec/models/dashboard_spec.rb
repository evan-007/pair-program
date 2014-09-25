require 'rails_helper'

RSpec.describe Dashboard, type: :model do
  before do
    @user = create(:user)
    @dashboard = Dashboard.new(@user)
  end
  it 'is initialised with a user' do
    expect(@dashboard).to be_a(Dashboard)
  end

  describe '#username' do
    it 'returns user\'s username' do
      expect(@dashboard.username).to eq @user.username
    end
  end

  describe '#messages' do
    before do
      @message = create(:message, receiver_id: @user.id)
    end
    it 'returns a count of the users\'s unread messages' do
      expect(@dashboard.messages).to eq 1
    end
  end

  describe '#new_friends' do
    before do
      @user2 = create(:user)
      @friendship = create(:friendship, user_id: @user2.id, friend_id: @user.id,
        workflow_state: 'unapproved')
    end
    it 'returns a count of unapproved friend requests' do
      expect(@dashboard.new_friends).to eq 1
    end
  end

  describe '#postings' do
    before do
      3.times { create(:posting, user_id: @user.id) }
    end
    it 'returns a count of postings' do
      expect(@dashboard.postings).to eq 3
    end
  end
end
