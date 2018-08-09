## install dependences

- postgresql ^10

- cmake

- ruby

```sh
rvm install 2.5.1
```

- bundler


```sh
gem install bundler
```

- rails

```sh
gem install rails
```

## Create a new rails application

### start applications

```sh
rails new . --api --database=postgresql
```

```sh
bin/rails db:setup
```

## Configure the initial tools

### rspec ([tutorial](https://www.devmynd.com/blog/setting-up-rspec-and-capybara-in-rails-5-for-testing/))

- add to `Gemfile`:

```Gemfile
group :development, :test do
  gem "database_cleaner"
  gem "rspec-rails"
end
group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
```
- install this gems

```sh
bundle install
```

- create initial files to `rspec`

```sh
rails generate rspec:install
```

- rewrite `spec_halper.rb`

```rb
RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  config.shared_context_metadata_behavior = :apply_to_host_groups
  config.filter_run_when_matching :focus
  config.example_status_persistence_file_path = "spec/examples.txt"
  config.disable_monkey_patching!
  config.default_formatter = 'doc' if config.files_to_run.one?
  config.order = :random
  Kernel.srand config.seed
  # config.profile_examples = 10
end
```

- rewrite your `rails_helper.rb`

```rb
ENV["RAILS_ENV"] ||= "test"
require File.expand_path("../../config/environment", __FILE__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require "spec_helper"
require "rspec/rails"
require "capybara/rspec"
ActiveRecord::Migration.maintain_test_schema!
Capybara.register_driver :selenium_chrome do |app|
Capybara::Selenium::Driver.new(app, browser: :chrome)
end
Capybara.javascript_driver = :selenium_chrome
RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end
  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end
  config.before(:each, js: true) do
    DatabaseCleaner.strategy = :truncation
  end
  config.before(:each) do
    DatabaseCleaner.start
  end
  config.after(:each) do
    DatabaseCleaner.clean
  end
end
```

### Configure `sass`

???

### Configure webpacker to react

???

## Create models and migrations

### Models

- generate model

```sh
bin/rails generate model User
```

### Migrations

- edit migration like that:

```rb
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
```

- run migrations

```sh
bin/rails db:migrate
```

## Configure Devise

- add gem to gemfile

```Gemfile
gem 'devise'
```
