Rails.application.routes.draw do

  root 'static_pages#home'

  get 'static_pages/home'

  #get '/about_me', to: 'static_pages#about_me'
  get 'static_pages/about_me'

  #get '/code_portfolio', to: 'static_pages#code_portfolio'
  get 'static_pages/code_portfolio'

  get 'static_pages/resume'

  get 'static_pages/research'

  get 'static_pages/publications'

  get 'static_pages/awards'

  get 'static_pages/get_in_touch'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
