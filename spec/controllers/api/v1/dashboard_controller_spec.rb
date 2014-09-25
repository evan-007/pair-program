require 'rails_helper'

RSpec.describe Api::V1::DashboardController, type: :controller do
  context 'with current_user' do
    before do
      @user = create(:user)
      sign_in @user
    end
    describe 'GET index' do
      # needs better description
      it 'builds a dashboard' do
        # can't build Dashboard and verify because dif object ids
        get :index
        expect(assigns(:dashboard)).to be_a Dashboard
      end
    end
  end
  context 'without a current_user' do
    it 'returns status 401' do
      get :index
      expect(response.status).to be 401
    end
  end
end
