class WelcomeSender
  def self.send(id)
    Message.create!(sender_id: User.first.id, receiver_id: id,
      title: 'Welcome to the site', body: 'Reply if you need anything')
  end
end
