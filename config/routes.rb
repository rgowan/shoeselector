Rails.application.routes.draw do

  root "statics#index"
  devise_for :users
  resources :wishes
  resources :products do
    member do
      put "like"
      put "dislike"
    end
  end
end
