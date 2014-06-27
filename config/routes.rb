Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update]
      resources :sessions, only: [:create, :destroy]
    end
  end
end
