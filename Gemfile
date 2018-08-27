source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'devise'
gem 'devise-i18n'
gem 'factory_bot_rails'
gem 'faker'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.1'
gem "rspec-rails"
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

gem 'bootstrap', '~> 4.1.1'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'material-sass', '~> 4.1.1'
gem 'mini_racer'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'

gem 'rails-i18n'

gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  gem "database_cleaner"
  gem "travis"
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'chromedriver-helper'
  gem 'selenium-webdriver'
end

group :production, :staging do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
