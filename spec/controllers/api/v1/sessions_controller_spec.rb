require 'rails_helper'

RSpec.describe Api::V1::SessionsController, :type => :controller do
	before do 
		@user = create(:user)
	end

	describe 'POST #create' do
		context 'with valid credentials' do 
			it 'creates a session' do
        post :create, email: @user.email, password: @user.password
        expect(response.status).to eq 200
        expect(session[:user_id]).to eq @user.id
			end
		end

		context 'with invalid credentials' do
			it 'does not create a session' do
        post :create, email: @user.email, password: 'notvalid'
				expect(session[:user_id]).to eq nil
        expect(response.status).to eq 401
			end
		end
	end

	describe 'DELETE #destroy' do
		before :each do
			post :create, email: @user.email, password: @user.password
		end

		it 'sets session[user_id] to nil' do
      delete :destroy, id: @user.id
      expect(response.status).to eq 200
			expect(session[:user_id]).to eq nil
		end
	end
  
  describe 'GET #show' do
    context 'with an logged-in user' do
      before do 
        session[:user_id] = @user.id
      end
      it 'returns information about current_user' do
        get :show
        data = JSON.parse(response.data)
        expect(response.status).to be 200
        expect(data["user"]).to be @user
      end
    end
  end
end
