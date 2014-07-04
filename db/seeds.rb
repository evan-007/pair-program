# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
languages = ['Ruby', 'Python', 'Javascript', 'Go', 'Scala', 'Erlang', 'Haskell']

languages.each do |l|
  Language.create(name: l)
end

User.create(username: 'test', email: 'test@test.com', password: 'password',
  password_confirmation: 'password', location: 'Paris France')