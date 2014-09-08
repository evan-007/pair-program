require 'rails_helper'

RSpec.describe Api::V1::ValidationsController, :type => :controller do
  describe 'GET username' do
    context 'when params[:username] match a DB record' do
      before do
        @user = create(:user)
      end
      it 'returns status 400' do
        get :username, { username: @user.username }
        expect(response.status).to eq 400
      end
    end
    context 'when params[:username] do not match a DB record' do
      it 'returns status 200' do
        get :username, { username: 'imvalid' }
        expect(response.status).to eq 200
      end
    end
  end
end
