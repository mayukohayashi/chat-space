Rails.application.routes.draw do
  root to: 'messages#index'
  get 'messages/new' => 'messages#new'
  get 'messages/edit' => 'messages#edit'
  get 'messages/message' => 'messages#message'
end
