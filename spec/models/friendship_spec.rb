require 'rails_helper'

RSpec.describe Friendship, :type => :model do
  it { should belong_to :user }
  it { should belong_to :friend }
  it { should validate_presence_of :user_id }
  it { should validate_presence_of :friend_id}

  before do
    @user = create(:user)
    @user2 = create(:user)
    @friendship = create(:friendship, user_id: @user.id, friend_id: @user2.id)
  end

  it 'has an initial state of "unapproved"' do
    expect(@friendship.workflow_state).to eq 'unapproved'
  end

  it 'has a state of "approved" after :approve' do
    @friendship.approve!
    expect(@friendship.workflow_state).to eq 'approved'
  end

  it 'has a state of "rejected" after :reject' do
    @friendship.reject!
    expect(@friendship.workflow_state).to eq 'rejected'
  end

  it 'can be approved after being rejected' do
    @friendship.reject!
    @friendship.approve!
    expect(@friendship.workflow_state).to eq 'approved'
  end
end
