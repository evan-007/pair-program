Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update]
      get '/users/profile', to: 'users#profile'

      resources :sessions, only: [:create, :destroy]
      resources :languages, only: [:index]
      resources :friendships, only: [:index, :create]
    end
  end
end
