require 'rails_helper'

RSpec.describe Api::V1::SessionsController, :type => :controller do
	before do 
		@user = create(:user)
	end

	describe 'POST #create' do
		context 'with valid credentials' do 
			it 'returns user information' do
        post :create, email: @user.email, password: @user.password
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data["user"]["username"]).to eq @user.username
        expect(data["user"]["token"]).to eq @user.token
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
end
