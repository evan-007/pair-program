require 'rails_helper'

RSpec.describe Api::V1::ConversationsController, type: :controller do
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
          @user2.send_message(@user, 'call me', 'subject')
          get :index, {box: 'inbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["conversations"][0]["subject"]).to eq 'subject'
        end
      end
      context 'no params' do
        it 'returns the users inbox' do
          @user2 = create(:user)
          @user2.send_message(@user, 'call me', 'subject')
          get :index
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["conversations"][0]["subject"]).to eq 'subject'
        end
      end
      context 'sentbox params'do
        it 'returns users sentbox' do
          @user2 = create(:user)
          @user.send_message(@user2, 'email me', 'some subject')
          get :index, {box: 'sentbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["conversations"][0]["subject"]).to eq 'some subject'
        end
      end
      context 'trashbox params' do
        it 'returns users trash' do
          #what a mess, refactor?
          @user2 = create(:user)
          @user2.send_message(@user, 'email me', 'delete this')
          @conversation = @user.mailbox.inbox.first
          @receipts = @conversation.receipts_for @user
          @receipts.move_to_trash
          get :index, {box: 'trash'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["conversations"][0]["subject"]).to eq 'delete this'
        end
      end
    end
    describe 'GET :show' do
      context 'with a current user' do
        before do
          @user = create(:user)
          request.headers["token"] = @user.token
          request.headers["username"] = @user.username
        end
        it 'returns one message' do
          @user2 = create(:user)
          @user2.send_message(@user, 'call me', 'subject')
          @id = @user.mailbox.conversations.first.id
          get :show, id: @id
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["message"]["username"]).to eq @user2.username
        end
      end
    end
  end
end