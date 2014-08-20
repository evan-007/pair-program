FactoryGirl.define do
  factory :posting do
    sequence(:title) { |n| "This is post #{n}"}
    sequence(:body) { |n| "here is posting #{n}"}
  end
end
