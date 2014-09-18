require 'rails_helper'

RSpec.describe Api::V1::UsersController, :type => :controller do

	describe 'POST #create' do
		context 'with valid params' do
			it 'creates a new user' do
				expect { post :create, user: attributes_for(:user)}
				.to change(User, :count).by(1)
			end

      it 'renders the user' do
				post :create, user: attributes_for(:user)
        expect(response.status).to eq 200
        expect(json).to include 'user'
			end

			it 'sends a welcome message to the new user' do
				post :create, user: attributes_for(:user)
				expect(User.last.received_messages.count).to eq 1
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
        post :update, id: @user.id, user: attributes_for(:user, username: 'update')
        expect(response.status).to be 401
			end
		end

    context 'with current_user' do
      before do
				sign_in(@user)
      end
      context 'with valid params' do
        it 'updates the user' do
          post :update, id: @user.id, user: attributes_for(:user, username: 'santa')
          expect(response.status).to be 200
          expect(json["user_profile"]["username"]).to eq 'santa'
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

  describe 'GET #index' do
		before do
			@user1 = create(:user)
			@user2 = create(:user)
			@user3 = create(:user)
			@user4 = create(:user)
		end
		context 'with params[:map]' do
			it 'renders all users' do
				@user = create(:user)
				get :index, { map: 'true' }
				expect(response.status).to be 200
				expect(json.length).to eq 5
			end
		end
		context 'no params' do
			before do
				@user = create(:user)
				sign_in @user
			end
	    it 'renders an array of all non-friends' do
	      #this is a terrible test
	      get :index
	      expect(response.status).to be 200
	      expect(json.length).to eq 4
	    end
	  end
	end

	describe 'GET show' do
		context 'as an authorized user' do
			before do
				@user = create(:user)
				sign_in @user
				@user2 = create(:user)
			end
			context 'with no params' do
				it 'returns a user\'s profile' do
					get :show, {id: @user2.id}
					expect(response.status).to eq 200
					expect(json['username']).to eq @user2.username
				end
			end
			context 'with params :profile' do
				#needs better description!
				it 'returns all user info' do
					get :show, {id: @user.id, profile: 'true'}
					expect(response.status).to eq 200
					expect(json["email"]).to eq @user.email
				end
			end
		end
	end
end
