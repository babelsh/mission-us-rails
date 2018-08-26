# Mission Us
[![Build Status](https://travis-ci.org/babelsh/mission-us-rails.svg?branch=master)](https://travis-ci.org/babelsh/mission-us-rails)

- [Dependencies](#dependencies)
- [Setup](#setup)
- [Development](#development)

## Dependencies

- Ruby >= 2.5.1
- PostgreSQL 9.6.1

### MacOS

```sh
brew update
brew install postgres
brew install yarn
gem install bundler
```

### Ubuntu

```sh
apt-get update
apt-get install postgresql postgresql-contrib postgresql-server-dev-all cmake
gem install bundler
```

## Docker

WIP

## Setup

```sh
bundle install
yarn install
cp config/database.example.yml config/database.yml

echo "POSTGRESQL_PASSWORD='YourPassword'" >> .env
echo "POSTGRESQL_USERNAME='YourUserName'" >> .env

bin/rails db:setup
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
