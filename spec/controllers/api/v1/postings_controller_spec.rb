require 'rails_helper'

RSpec.describe Api::V1::PostingsController, type: :controller do
  context 'with current user' do

    before do
      @user = create(:user)
      request.headers["username"] = @user.username
      request.headers["token"] = @user.token
    end

    describe 'GET :index' do
      context 'with no params' do
        before do
          5.times { create(:posting, user: @user) }
        end
        it 'returns all Postings' do
          get :index
          data = JSON.parse(response.body)
          expect(data.length).to eq 5
        end
      end
      context 'with "list" params' do
        before do
          @user2 = create(:user)
          2.times { create(:posting, user: @user) }
          3.times { create(:posting, user: @user2) }
        end
        it 'returns a user\'s postings' do
          get :index, {list: 'true'}
          data = JSON.parse(response.body)
          expect(data.length).to eq 2
        end
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

    describe 'POST :create' do
      context 'with valid params' do
        it 'creates a Posting' do
          post :create, posting: attributes_for(:posting)
          data = JSON.parse(response.body)
          expect(@user.postings.size).to eq 1
          expect(response.status).to eq 201
        end
      end

      context 'with invalid params' do
        it 'renders status 400' do
          post :create, posting: attributes_for(:posting, title: '1')
          expect(response.status).to eq 400
        end
      end
    end

    describe 'DELETE :destroy' do
      before do
        @posting = create(:posting, user: @user)
      end

      context 'with valid params' do
        it 'destroys a Posting' do
          delete :destroy, id: @posting.id
          expect(response.status).to eq 204
          expect(@user.postings.count).to eq 0
        end
      end
    end

    describe 'PUT :update' do
      before do
        @posting = create(:posting, user: @user)
      end
      context 'with valid params' do
        it 'updates the post' do
          put :update, id: @posting.id, posting: attributes_for(:posting, title: 'new title')
          data = JSON.parse(response.body)
          expect(response.status).to eq 200
          expect(data["title"]).to eq 'new title'
        end
      end
      context 'with invalid params' do
        it 'does not update the post' do
          put :update, id: @posting.id, posting: attributes_for(:posting, title: '')
          expect(response.status).to eq 400
        end
      end
    end
  end

  context 'without a current user' do
    it 'is unauthorized' do
      get :index
      expect(response.status).to eq 401
    end
  end
end
