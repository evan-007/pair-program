Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update, :show]
      get '/users/profile', to: 'users#profile'
      get '/users/map', to: 'users#map'

      resources :sessions, only: [:create, :destroy]
      resources :languages, only: [:index]

      resources :friendships, only: [:index, :create, :update]

      resources :friends, only: [:index]

      resources :messages, only: [:index, :update, :create]
      #bad, refactor into index?count
      get '/messages/count', to: 'messages#count'

      resources :postings, only: [:index, :show, :create, :destroy]
    end
  end
end
