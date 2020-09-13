Rails.application.routes.draw do
  resources :menus, only: [:index]
  resources :items, only: [:show]
  resources :orders, except: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
