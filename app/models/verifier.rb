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

  def message_guard
    # use strings, not booleans because JSON input
    if @reply == 'false'
      self.friend
    elsif @reply == 'true'
      ## what happens when id1 created the post
      ## and is replying to id2's message?
      self.active_post
    else
      false
    end
  end
end
