Rails.application.routes.draw do
  root 'pages#home'
  resources :users, only: [:new, :create, :edit]
  resources :sessions, only: [:new, :create, :destroy]
end
