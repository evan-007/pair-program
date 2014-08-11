source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'
# Use sqlite3 as the database for Active Record
gem 'pg'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',          group: :doc

gem 'spring',        group: :development

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'geocoder'

gem "active_model_serializers"

#seed data
gem 'faker'

#state
gem 'workflow'

#background jobs
gem 'sidekiq'

# for sidekiq monitoring
# if you require 'sinatra' you get the DSL extended to Object
gem 'sinatra', '>= 1.3.0', :require => nil


#load app via Procfile
#starts sidekiq with app
# gem 'foreman'

#deploy
gem 'capistrano'
gem 'capistrano-rails'
gem 'capistrano-bundler'
gem 'capistrano-rbenv'

group :development, :test do
  gem 'spring-commands-rspec'
  gem 'rspec-rails'
  gem 'capybara'
end

group :test do
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
end

#for ActionController streaming
# gem 'puma'

#app server
gem 'unicorn'

gem 'redis'
