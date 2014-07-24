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
          expect(data["messages"][0]["title"]).to eq 'call me'
        end
      end
      context 'no params' do
        it 'returns the users inbox' do
          @user2 = create(:user)
          @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
          get :index
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["messages"][0]["title"]).to eq 'call me'
        end
      end
      context 'sentbox params'do
        it 'returns users sentbox' do
          @user2 = create(:user)
          @user.sent_messages.create(receiver_id: @user2.id, body: 'email me', title: 'some subject')
          get :index, {box: 'sentbox'}
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["messages"][0]["title"]).to eq 'some subject'
        end
      end
      context 'trashbox params' do
        it 'returns users trash' do

        end
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
        @user2.sent_messages.create(receiver_id: @user.id, title: 'call me', body: 'blablabla')
        @id = @user.received_messages.first.id
        get :show, id: @id
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data["message"]["title"]).to eq 'call me'
      end
    end
  end
end