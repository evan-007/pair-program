task seed_data: :environment do
  languages = %w[Python Javascript PHP Ruby Scala Go Haskell Clojure Swift]

  languages.each do |l|
    Language.create(name: l)
  end

  User.create(username: 'test', email: 'test@test.com', password: 'password',
    password_confirmation: 'password', languages: [Language.first, Language.last])

  22.times do |n|
    response = HTTParty.get('http://hipsterjesus.com/api/?paras=1&type=hipster-centric&html=false')
    hipster_text = JSON.parse(response.body)
    username = Faker::Internet.user_name
    email = Faker::Internet.email
    pass = Faker::Internet.password
    about = hipster_text['text']
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

  (3..19).each do |n|
    user = User.find(n)
    language =
      if user.languages.count > 0 then user.languages.first.name else 'my project' end
    title = "Let's work on #{language} together!"
    body = Faker::Lorem.paragraph
    Posting.create(user: User.find(n), title: title, body: body)
  end
end
