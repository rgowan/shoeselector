Rails.application.routes.draw do

  root "statics#index"
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  resources :wishes, only: [:index]
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
