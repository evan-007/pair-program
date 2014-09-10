# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
languages = %w[Java C C++ C# Python Javascript PHP Ruby Objective-C Scala Go Haskell Lisp]

languages.each do |l|
  Language.create(name: l)
end

User.create(username: 'test', email: 'test@test.com', password: 'password',
  password_confirmation: 'password', location: 'Paris France', languages: [Language.first, Language.last])

#depends on active network for geocoding
50.times do |n|
  username = Faker::Internet.user_name
  email = Faker::Internet.email
  pass = Faker::Internet.password
  about = Faker::Lorem.sentence(4)
  User.create(username: "#{username}#{n}", email: "#{username}#{n}@faker.com",
  password: pass, password_confirmation: pass, about: about, location: Faker::Address.country)
  #sleep to prevent API rate limit
  sleep(rand(3))
end

User.all.each do |user|
  user_languages = Language.all.shuffle.take(rand(3))
  user.update(languages: user_languages)
end

for n in 3..10
  User.first.friendships.create(friend_id: User.find(n).id)
end

User.first.friendships.take(4).each do |f|
  f.approve!
end

User.first.friendships.last.reject!

User.last.friendships.create(friend_id: User.first.id)

User.last.friendships.first.approve!

for n in 11..21
  User.find(n).friendships.create(friend_id: User.first.id)
end

for n in 2..10
  User.first.sent_messages.create(receiver_id: User.find(n).id, title: "It's #{User.first.username}", body: 'hellohello')
end

for n in 11..21
  User.find(n).sent_messages.create(receiver_id: User.first.id, title: "Message from #{User.find(n).username}", body: 'hellohello')
end

(1..10).each do |n|
  Posting.create(user: User.find(n), title: "Posting #{n}", body: "filler content #{n}")
end
