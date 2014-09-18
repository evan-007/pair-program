require 'rails_helper'

RSpec.describe MailFetcher, type: :model do
  it 'is initialized with a type and user_id' do
    @user = create(:user)
    type = 'inbox'
    expect(MailFetcher.new(type, @user.id)).to be_a MailFetcher
  end

  describe ':get' do
    before do
      @user = create(:user)
      @user2 = create(:user)
    end
    context 'type == inbox' do
      it 'gets the user\'s inbox' do
        @type = 'inbox'
        @message = create(:message, sender_id: @user2.id, receiver_id: @user.id)
        expect(MailFetcher.new(@type, @user.id).get).to eq [@message]
      end
    end
    context 'type == sentbox' do
      it 'gets the user\'s sentbox' do
        @type = 'sentbox'
        @message = create(:message, sender_id: @user.id, receiver_id: @user.id)
        expect(MailFetcher.new(@type, @user.id).get).to eq [@message]
      end
    end
    context 'type == trash' do
      it 'gets the user\'s trashed messages' do
        @type = 'trash'
        @message = create(:message, sender_id: @user2.id, receiver_id: @user.id)
        @message.trash!
        expect(MailFetcher.new(@type, @user.id).get).to eq [@message]
      end
    end
  end
  describe 'get_one' do
    before do
      @user = create(:user)
      @user2 = create(:user)
    end
    context 'type == inbox' do
      it 'returns one message from the inbox' do
        @type = 'inbox'
        @message = create(:message, sender_id: @user2.id, receiver_id: @user.id)
        expect(MailFetcher.new(@type, @user.id).get_one(@message.id)).to eq @message
      end
    end
    context 'type == sentbox' do
      it 'returns one message from the sentbox' do
        @type = 'sentbox'
        @message = create(:message, sender_id: @user.id, receiver_id: @user.id)
        expect(MailFetcher.new(@type, @user.id).get_one(@message.id)).to eq @message
      end
    end
    context 'type == trash' do
      it 'returns one message from the trash' do
        @type = 'trash'
        @message = create(:message, sender_id: @user2.id, receiver_id: @user.id)
        @message.trash!
        expect(MailFetcher.new(@type, @user.id).get_one(@message.id)).to eq @message
      end
    end
  end
end
