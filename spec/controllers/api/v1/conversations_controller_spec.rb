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
    end
  end
end