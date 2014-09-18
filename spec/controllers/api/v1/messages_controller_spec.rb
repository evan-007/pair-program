require 'rails_helper'

RSpec.describe Api::V1::MessagesController, type: :controller do
  describe 'GET index' do
    context 'with current user' do
      before do
        @user = create(:user)
        request.headers["token"] = @user.token
        request.headers["username"] = @user.username
      end
      context 'inbox params' do
        it 'returns the users inbox' do
          @user2 = create(:user)
          @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
          get :index, {box: 'inbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data[0]["title"]).to eq 'call me'
        end
      end
      context 'no params' do
        it 'returns the users inbox' do
          @user2 = create(:user)
          @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
          get :index
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data[0]["title"]).to eq 'call me'
        end
      end
      context 'sentbox params'do
        it 'returns users sentbox' do
          @user2 = create(:user)
          @user.sent_messages.create(receiver_id: @user2.id, body: 'email me', title: 'some subject')
          get :index, {box: 'sentbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data[0]["title"]).to eq 'some subject'
        end
      end
      context 'trashbox params' do
        it 'returns users trash' do
          @user2 = create(:user)
          @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
          @user2.sent_messages.first.trash!
          get :index, {box: 'trash'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data[0]["title"]).to eq 'call me'
        end
      end
    end
  end
  describe 'GET :update' do
    context 'with a current user' do
      before do
        @user = create(:user)
        request.headers["token"] = @user.token
        request.headers["username"] = @user.username
        @user2 = create(:user)
        @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
        @id = @user.received_messages.first.id
      end
      context 'params[:box] == inbox' do
        it 'returns one message from inbox' do
          get :update, id: @id
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["message"]["title"]).to eq 'call me'
        end
      end
      context 'params[:box] == sentbox' do
        before do
          @user.sent_messages.create(receiver_id: @user2.id, title: 'hellohowareyou', body: 'blblababalba')
          @id = @user2.received_messages.last.id
        end
        it 'returns one message from sentbox' do
          get :update, {id: @id, box: 'sentbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["message"]["title"]).to eq 'hellohowareyou'
        end
      end
      context 'params[:box] == trash' do
        before do
          @message = @user.received_messages.last
          @message.trash!
        end
        it 'returns one message from trash' do
          get :update, {id: @message.id, box: 'trash'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["message"]["workflow_state"]).to eq 'trashed'
        end
      end
      it 'sets the message to read?: true' do
        expect(@user.received_messages.first.read?).to eq false
        get :update, id: @id
        expect(@user.received_messages.first.read?).to eq true
      end
    end
  end
  describe 'POST create' do
    context 'with current user' do
      before do
        @user = create(:user)
        request.headers["token"] = @user.token
        request.headers["username"] = @user.username
      end
      context 'two users are friends' do
        before do
          @user2 = create(:user)
          @friendship = Friendship.create(user_id: @user.id, friend_id: @user2.id)
          @friendship.approve!
        end
        it 'creates a new message' do
          post :create, message: attributes_for(:message, receiver_id: @user2.id)
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["message"]["receiver_name"]).to eq @user2.username
        end
      end
      context 'two users are not friends' do
        it 'does not create a new message' do
          @user3 = create(:user)
          post :create, message: attributes_for(:message, receiver_id: @user3.id)
          expect(response.status).to eq 401
        end
      end
    end
  end
  describe 'GET count' do
    context 'with a current user' do
      before do
        @user = create(:user)
        request.headers["token"] = @user.token
        request.headers["username"] = @user.username
      end
      it 'returns a count of unread user messages'# do
      #   @user2 = create(:user)
      #   3.times { create(:message, sender_id: @user2.id, receiver_id: @user.id) }
      #   get :count
      #   expect(response.body).to eq '3'
      #   expect(response.status).to eq 200
      # end
    end
  end
end
