Rails.application.routes.draw do
  root "homes#top"
  get "home", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "solar_system", to: "spaces#solar_system"
  get "solar_system_planet", to: "spaces#solar_system_planet"
  get "exoplanet", to: "spaces#exoplanet"
  get "unverse", to: "spaces#unverse"
end
