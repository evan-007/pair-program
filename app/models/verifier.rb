class Verifier
  def friend(id1, id2)
    if Friendship.where(user_id: id1, friend_id: id2).first || Friendship.where(user_id: id2, friend_id: id1).first
      true
    else
      false
    end
  end

  def active_post(id, posting_id)
    if User.find(id).postings.where(id: posting_id).first
      true
    else
      false
    end
  end

  def message_guard(id1, id2, reply, *posting_id)
    if reply == 'false'
      self.friend(id1, id2)
    elsif reply == 'true'
      self.active_post(id1, posting_id)
    else
      false
    end
  end
end
