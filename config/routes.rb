Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:new, :create, :edit]
      resources :sessions, only: [:new, :create, :destroy]
    end
  end
end
