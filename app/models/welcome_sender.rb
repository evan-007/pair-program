class WelcomeSender
  def initialize(user)
    @user = user
  end

  def send
    User.find(@user.id).received_messages.create(sender_id: User.first.id, title: 'Welcome',
    body: 'Thanks for signing up, let me know if you need anything! Happy hacking')
  end
end
