Rails.application.routes.draw do
  root "homes#top"
  get "home", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "solar_system", to: "solar_systems#solar_system"
  get "solar_system_planet", to: "solar_systems#solar_system_planet"
  get "galaxy", to: "spaces#galaxy"
  get "galaxy_group", to: "spaces#galaxy_group"
  get "cluster_of_galaxies", to: "spaces#cluster_of_galaxies"
  get "supercluster", to: "spaces#supercluster"
  get "end_of_unverse", to: "spaces#end_of_unverse"
end
