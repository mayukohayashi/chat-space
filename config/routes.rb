Rails.application.routes.draw do
  devise_for :users
  root to: 'messages#index'
  resources :messages, only: [:index]
  resources :users, only: [:edit, :update]
end