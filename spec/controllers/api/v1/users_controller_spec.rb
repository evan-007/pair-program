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
        data = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(data).to include 'user' 
			end
      
      it 'renders username and token' do
        post :create, user: attributes_for(:user, username: 'justATest', email: 'me@gmail.com', password: 'password', password_confirmation: 'password')
        data = JSON.parse(response.body)
        expect(data["user"]["username"]).to_not eq nil
        expect(data["user"]["token"]).to_not eq nil
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
        expect(response.status).to be 406
			end
		end
    
    context 'with current_user' do
      before do 
        request.headers["username"] = @user.username
        request.headers["token"] = @user.token
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
  
  describe 'GET #index' do
    before do
      @user1 = create(:user)
      @user2 = create(:user)
      @user3 = create(:user)
      @users = (MapUserSerializer.new(User.all))
    end
    
    it 'renders an array of all users' do
      #this is a terrible test
      get :index
      data = JSON.parse(response.body)
      expect(response.status).to be 200
      expect(data["users"][0]["latitude"]).to eq @user1.latitude
    end
  end
  
  describe 'GET #profile' do
    before do
      @user = create(:user)
    end
    
    context 'as an authorized user' do
      it 'returns user information' do
        get :profile, id: @user.id
        data = JSON.parse(response.body)
        expect(response.status).to be 200
        expect(data["user"]["username"]).to eq @user.username
        expect(data["user"]["token"]).to eq nil
      end
    end
    
    context 'as an unauthorized user' do
      it 'returns status unauthorized' do
        get :profile, id: @user.id
        expect(response.status).to be 406
      end
    end
  end
end
