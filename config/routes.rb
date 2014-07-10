Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update]
      get '/users/auth_test', to: 'users#auth_test'
      get '/users/profile', to: 'users#profile'
      
      resources :sessions, only: [:create, :destroy]
    end
  end
end
