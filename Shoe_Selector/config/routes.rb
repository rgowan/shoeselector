Rails.application.routes.draw do

  root to: "products#index"

  resources :wishes
  resources :products
end
