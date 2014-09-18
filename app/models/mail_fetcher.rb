class MailFetcher
  def initialize(type, user_id)
    @type = type
    @user_id = user_id
  end

  def get
    if @type == 'inbox'
      User.find(@user_id).received_messages.where.not(workflow_state: 'trashed')
    elsif @type == 'sentbox'
      User.find(@user_id).sent_messages
    elsif @type == 'trash'
      User.find(@user_id).received_messages.where(workflow_state: 'trashed')
    end
  end

  def get_one(id)
    if @type == 'inbox'
      User.find(@user_id).received_messages.find(id)
    elsif @type == 'sentbox'
      User.find(@user_id).sent_messages.find(id)
    elsif @type =='trash'
      User.find(@user_id).received_messages.where(workflow_state: 'trashed').find(id)
    end
  end
end
