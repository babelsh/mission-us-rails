# Mission Us
[![Build Status](https://travis-ci.org/babelsh/mission-us-rails.svg?branch=master)](https://travis-ci.org/babelsh/mission-us-rails)

- [Dependencies](#dependencies)
- [Setup](#setup)
- [Development](#development)

## Dependencies

- Ruby >= 2.5.1
- PostgreSQL 10.4
- node.js 6.0.0+


### MacOS

```sh
brew update
brew install postgres
brew install yarn
gem install bundler
```

### Ubuntu

```sh
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib postgresql-server-dev-all cmake
sudo apt-get install yarn
gem install bundler
```

## Docker

[WIP]

## Setup

```sh
bundle install
yarn install
cp config/database.example.yml config/database.yml

echo "POSTGRESQL_PASSWORD='YourPassword'" >> .env
echo "POSTGRESQL_USERNAME='YourUserName'" >> .env

bin/rails db:setup
bin/rails db:migrate
bin/rails db:seed
```

## Testing

### Test

We use rspec framework to test our rails application. To test you can run:

```sh
bundle exec rspec
```

### Jest

To test our js files we use jest framework. Run with:

```sh
yarn test
```

and if you change some component you should to update de snapshot with:

```sh
yarn test -u <path_to_test_file_changed>
```

## Development

Run the local server at http://localhost:3000 with:

```sh
bin/rails s
```

Run tests with:

```sh
rspec
```

#Deploy

[WIP]
