FactoryGirl.define do
	factory :user do
		sequence(:username) { |n| "user#{n}"}
		sequence(:email) { |n| "me#{n}@example.com"}
		password 'password'
		password_confirmation 'password'
	end
end
