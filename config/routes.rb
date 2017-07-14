Rails.application.routes.draw do

  root 'static_pages#home'

  get 'home', to: 'static_pages#old_home', as: 'home'

  get 'about_me', to: 'static_pages#about_me', as: 'about_me'

  get 'code_portfolio', to: 'static_pages#code_portfolio', as: 'code_portfolio'

  get 'resume', to: 'static_pages#resume', as: 'resume'

  get 'resume_open', to: 'static_pages#resume_open'

  get 'resume_download', to: 'static_pages#resume_download'

  get 'research', to: 'static_pages#research', as: 'research'

  get 'publications', to: 'static_pages#publications', as: 'publications'

  get 'awards', to: 'static_pages#awards', as: 'awards'

  get 'get_in_touch', to: 'static_pages#get_in_touch', as: 'get_in_touch'

  post 'get_in_touch', to: 'static_pages#email'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
