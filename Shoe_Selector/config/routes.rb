Rails.application.routes.draw do

  root "statics#index"
  devise_for :users
  resources :wishes
  resources :products
end
