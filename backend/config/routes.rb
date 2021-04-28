Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :carts
      end
      resources :carts
      resources :products
    end
  end
end