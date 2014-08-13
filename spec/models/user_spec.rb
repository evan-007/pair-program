require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of :username }
  it { should validate_uniqueness_of :username }
  it { should validate_presence_of :email }
  it { should validate_uniqueness_of :email }
  it { should have_many :languages }
  it { should have_many(:user_languages).dependent(:destroy) }
  it { should have_many(:friendships).dependent(:destroy) }
  it { should have_many :friends}
  it { should have_many(:inverse_friendships).dependent(:destroy) }
  it { should have_many :inverse_friends }
  it { should have_many :sent_messages }
  it { should have_many :received_messages }
  it { should have_many(:postings).dependent(:destroy)}

  before do
    @user = create(:user)
  end
  it 'should be geocoded after validation' do
    @user.update(location: 'Boston MA')
    expect(@user.latitude).to_not eq nil
    expect(@user.longitude).to_not eq nil
  end

  it 'should hash email after validation' do
    expect(@user.gravatar_hash).to_not eq nil
  end

  it 'should have a token' do
    expect(@user.token).to_not eq nil
  end

  describe ':friend_ids' do
    it 'returns an array of all approved friendship user ids' do
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

      #can't user eq with block
      result = @user.friend_ids
      expect(result).to eq [@user2.id, @user4.id]
    end
  end

  describe ':all_friendship_ids' do
    it 'returns all friendships and inverse_friendships, approved or not' do
      @user2 = create(:user)
      @user3 = create(:user)
      @user4 = create(:user)
      @user5 = create(:user)
      @friendship1 = create(:friendship, user_id: @user.id, friend_id: @user2.id)
      @friendship2 = create(:friendship, user_id: @user.id, friend_id: @user3.id)
      @friendship3 = create(:friendship, user_id: @user4.id, friend_id: @user.id)
      @friendship4 = create(:friendship, user_id: @user5.id, friend_id: @user.id)
      @friendship1.approve!

      expect(@user.all_friendship_ids.length).to eq 4
    end
  end

  describe ':not_friends' do
    before do
      @user2 = create(:user)
      @user3 = create(:user)
      @user4 = create(:user)
      @user5 = create(:user)
      @friendship = create(:friendship, user_id: @user.id, friend_id: @user2.id)
      @friendship2 = create(:friendship, user_id: @user5.id, friend_id: @user.id)

    end

    it 'returns all users who do not have a friendship with current user' do
      expect(@user.not_friends.sort).to eq [@user3.id, @user4.id]
    end
  end

  describe ':pending_frinds' do
    before do
      @user2 = create(:user)
      @user3 = create(:user)
      @user4 = create(:user)
      @user5 = create(:user)
      @friendship = create(:friendship, user_id: @user.id, friend_id: @user2.id)
      @friendship2 = create(:friendship, user_id: @user5.id, friend_id: @user.id)
    end
    it 'returns an array of pending friends' do
      expect(@user.pending_friends.sort).to eq [@user2.id]
    end
  end

  describe ':unread_messages' do
    it 'returns the number of unread messages' do
      @user2 = create(:user)
      3.times { create(:message, sender_id: @user2.id, receiver_id: @user.id) }
      expect(@user.unread_messages).to eq 3
    end
  end
end
