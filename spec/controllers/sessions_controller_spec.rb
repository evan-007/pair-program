require 'rails_helper'

RSpec.describe SessionsController, :type => :controller do
	before do 
		@user = create(:user)
	end

	describe 'POST #create' do
		context 'with valid credentials' do
			before :each do 
				post :create, email: @user.email, password: @user.password
			end
			it 'creates a session' do
				expect(session[:user_id]).to eq @user.id
			end
			it 'redirects to the homepage' do
				expect(response).to redirect_to root_path
			end
		end

		context 'with invalid credentials' do
			before do 
				post :create, email: @user.email, password: 'notvalid'
			end

			it 'does not create a session' do
				expect(session[:user_id]).to eq nil
			end
			it 'renders #new' do
				expect(response).to render_template :new
			end
		end
	end

	describe 'DELETE #destroy' do
		before :each do
			post :create, email: @user.email, password: @user.password
			delete :destroy, id: @user.id
		end

		it 'sets session[user_id] to nil' do
			expect(session[:user_id]).to eq nil
		end

		it 'redirects to homepage' do
			expect(response).to redirect_to root_path
		end
	end
end
