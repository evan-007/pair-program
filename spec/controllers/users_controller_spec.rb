require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
	describe 'GET #new' do
		it 'assigns a new User to @user' do
			get :new
			expect(assigns(:user)).to be_a_new(User)
		end
	end

	describe 'POST #create' do
		context 'with valid params' do
			it 'creates a new user' do
				expect { post :create, user: attributes_for(:user)}
				.to change(User, :count).by(1)
			end

			it 'redirects to root' do
				post :create, user: attributes_for(:user)
				expect(response).to redirect_to root_path
			end
		end

		context 'with invalid params' do
			it 'does not create a new user' do
				expect { post :create, user:attributes_for(:user, password: '')}
				.to_not change(User, :count)
			end

			it 'renders :new' do
				post :create, user: attributes_for(:user, password: '')
				expect(response).to render_template :new
			end
		end
	end
end
