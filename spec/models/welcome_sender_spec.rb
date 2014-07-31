require 'rails_helper'

RSpec.describe WelcomeSender, type: :model do
  before do
    #hack, message will just come from the first user
    @admin = create(:user)
  end
  it 'sends a message to a user' do
    @user = create(:user)
    WelcomeSender.new(@user).send
    expect(@user.received_messages.count).to eq 1
    expect(@user.received_messages.first.sender_id).to eq User.first.id
    expect(@user.received_messages.first.title).to eq 'Welcome'
  end
end
