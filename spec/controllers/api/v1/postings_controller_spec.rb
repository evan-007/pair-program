require 'rails_helper'

RSpec.describe Api::V1::PostingsController, type: :controller do
  context 'with current user' do

    before do
      @user = create(:user)
      request.headers["username"] = @user.username
      request.headers["token"] = @user.token
    end

    describe 'GET :index' do
      before do
        5.times { create(:posting, user: @user) }
      end
      it 'returns all Postings' do
        get :index
        data = JSON.parse(response.body)
        expect(data.length).to eq 5
      end
    end

    describe 'GET :show' do
      before do
        @posting = create(:posting, user: @user)
      end
      it 'renders 1 Posting' do
        get :show, id: @posting.id
        data = JSON.parse(response.body)
        expect(data["title"]).to eq @posting.title
        expect(response.status).to eq 200
      end
    end
  end
end
