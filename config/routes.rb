Rails.application.routes.draw do

  root "statics#index"
  devise_for :users
  resources :wishes
  resources :products do
    collection do 
      get "likes"
    end
    member do
      put "like"
      put "dislike"
    end
  end
end
