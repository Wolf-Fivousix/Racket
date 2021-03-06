Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  mount ActionCable.server => "/cable"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:index, :show, :create, :update, :destroy]
    resources :messages, only: [:index, :create, :update, :destroy]
    resources :memberships, only: [:index, :create, :destroy]
  end
  # Nest this inside API and update all the AJAX calls.
end
