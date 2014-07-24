FactoryGirl.define do
  factory :message do
    sequence(:title) { |n| "Message #{n}"}
    sequence(:body) { |n| "This is message #{n}"}
  end
end