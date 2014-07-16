require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of :username }
  it { should validate_uniqueness_of :username }
  it { should validate_presence_of :email }
  it { should validate_uniqueness_of :email }
  it { should have_many :languages }
  it { should have_many(:user_languages).dependent(:destroy)}
  it { should have_many(:friendships).dependent(:destroy)}
  it { should have_many :friends}
  
  it 'should be geocoded after validation' do
    @user = create(:user)
    
    @user.update(location: 'Boston MA')
    expect(@user.latitude).to_not eq nil
    expect(@user.longitude).to_not eq nil
  end
  
  it 'should hash email after validation' do
    @user = create(:user)
    expect(@user.gravatar_hash).to_not eq nil
  end
  
  it 'should have a token' do
    @user = create(:user)
    expect(@user.token).to_not eq nil
  end
end
