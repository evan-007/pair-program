class MailFetcher
  def initialize(type, user_id)
    @type = type
    @user_id = user_id
  end

  def get
    if @type == 'inbox'
      User.find(@user_id).received_messages
    elsif @type == 'sentbox'
      User.find(@user_id).sent_messages
    end
  end
end
