require 'rails_helper'

RSpec.describe Message, :type => :model do
  it { should belong_to :sender }
  it { should belong_to :receiver }
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }

  before do
    @user = create(:user)
    @user2 = create(:user)
    @message = @user.sent_messages.create(receiver_id: @user2.id, title: 'asdf', body: 'asdfasdf')
  end

  it 'starts with workflow_state unread' do
    expect(@message.workflow_state).to eq 'unread'
  end

  context 'state :unread' do
    it 'changes state to :read' do
      @message.request!
      expect(@message.workflow_state).to eq 'read'
    end
    it 'changes state to :trashed' do
      @message.trash!
      expect(@message.workflow_state).to eq 'trashed'
    end
  end
  context 'state :read' do
    before do
      @message.request!
    end
    it 'changes state to :trashed' do
      @message.trash!
      expect(@message.workflow_state).to eq 'trashed'
    end
    it 'can be requested again' do
      @message.request!
      expect(@message.workflow_state).to eq 'read'
    end
  end
end
