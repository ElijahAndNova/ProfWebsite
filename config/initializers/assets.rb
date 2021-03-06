# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.scss, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
Rails.application.config.assets.precompile += %w(home.js home2.js home3.js old_home.js portfolio.js about.js resume.js awards.js research.js publications.js get_in_touch.js)


#Particles
# Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'javascripts')
# Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'javascripts')
Rails.application.config.assets.precompile += %w( .js .es6 particles.json )