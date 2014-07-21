Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update]
      get '/users/profile', to: 'users#profile'
      get '/users/map', to: 'users#map'

      resources :sessions, only: [:create, :destroy]
      resources :languages, only: [:index]

      resources :friendships, only: [:index, :create]
      get 'friendships/requests', to: 'friendships#requests'
      post 'friendships/approve/:id', to: 'friendships#approve'
      get 'friendships/pending', to: 'friendships#pending'
      
      resources :friends, only: [:index]
      
      resources :conversations, only: [:index, :show]
    end
  end
end
