class Dashboard
  def initialize(user)
    @user = user
  end

  def messages
    @user.unread_messages
  end

  def new_friends
    @user.inverse_friendships.where(workflow_state: 'unapproved').count
  end

  def postings
    Posting.count
  end

  def username
    @user.username
  end
end
