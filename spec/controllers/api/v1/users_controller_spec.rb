require 'rails_helper'

RSpec.describe Api::V1::UsersController, :type => :controller do

	describe 'POST #create' do
		context 'with valid params' do
			it 'creates a new user' do
				expect { post :create, user: attributes_for(:user)}
				.to change(User, :count).by(1)
			end
      
      it 'generates a token for each user' do
        post :create, user: attributes_for(:user)
        expect(User.last.token).to_not eq nil
      end

      it 'renders user' do
				post :create, user: attributes_for(:user)
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data).to include 'user' 
			end
		end

		context 'with invalid params' do
			it 'does not create a new user' do
				expect { post :create, user:attributes_for(:user, password: '')}
				.to_not change(User, :count)
			end

      it 'returns status 406' do
				post :create, user: attributes_for(:user, password: '')
        expect(response.status).to eq 406
			end
		end
	end

  describe 'POST #update' do
    before do
      @user = create(:user)
    end

		context 'without current_user' do
      it 'is unauthorized' do
        post :update, id: @user.id
        expect(response.status).to be 401
			end
		end
    
    context 'with current_user' do
      before do
        session[:user_id] = @user.id
      end
      context 'with valid params' do
        it 'updates the user' do
          post :update, id: @user.id, user: attributes_for(:user, username: 'santa')
          data = JSON.parse(response.body)
          expect(response.status).to be 200
          expect(data["user"]["username"]).to eq 'santa'
        end
      end
      context 'with invalid params' do
        it 'does not update the user' do
          post :update, id: @user.id, user: attributes_for(:user, username: '')
          expect(response.status).to be 406
          expect(@user.username).to_not be nil
        end
      end
    end
	end
end
