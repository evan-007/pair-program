Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update, :show]

      get '/users/validator', to: 'users#validator'
      get '/users/profile', to: 'users#profile'

      get '/validations/username', to: 'validations#username'
      get '/validations/email', to: 'validations#email'

      resources :sessions, only: [:create, :destroy]
      resources :languages, only: [:index]

      resources :friendships, only: [:index, :create, :update]

      resources :friends, only: [:index, :show]

      resources :messages, only: [:index, :update, :create]
      #bad, refactor into index?count
      get '/messages/count', to: 'messages#count'

      resources :postings
    end
  end
end
