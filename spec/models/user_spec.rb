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
end
