Rails.application.routes.draw do
  root "homes#top"
  get "home", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "solar_system", to: "solar_systems#solar_system"
  get "solar_system_planet", to: "solar_systems#solar_system_planet"
end
