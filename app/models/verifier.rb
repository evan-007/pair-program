class Verifier
  attr_reader :id1, :id2, :reply, :posting_id, :type

  # Sandy Metz style!
  def initialize(args)
    @sender_id = args[:sender_id]
    @receiver_id = args[:receiver_id]
    @reply = args[:reply]
    @posting_id = args[:posting_id]
    @type = args[:type]
  end

  def friend
    if Friendship.where(user_id: @sender_id, friend_id: @receiver_id).first || Friendship.where(user_id: @receiver_id, friend_id: @sender_id).first
      true
    else
      false
    end
  end

  def active_post
    if User.find(@receiver_id).postings.where(id: @posting_id).first
      true
    else
      false
    end
  end

  def second_message?
    # checks if sender of new message has already received a message from
    # receiver of new message
    # used to handle cases when sender is replying to a message sent in
    # response to sender's posting.. ug
    if User.find(@receiver_id).sent_messages.where(receiver_id: @sender_id).first
      true
    else
      false
    end
  end

  def message_guard
    # use strings, not booleans because JSON input
    if @reply == 'false'
      # controller sets reply to either true or false
      # default is false so check for second_message
      # if users aren't friends. smells
      self.friend ? true : self.second_message?
    elsif @reply == 'true'
      self.active_post
    else
      false
    end
  end
end
