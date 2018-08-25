FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password 'nopasswd'
    password_confirmation 'nopasswd'
  end
end
