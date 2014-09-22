class MessageGuard

  def check(id1, id2, reply, *id)
    if reply == 'false'
      FriendVerifier.new.verify(id1, id2)
    elsif reply == 'true'
      # this only works for id2
      # what about if id1 is replying?
      if User.find(id2).postings.where(id: id).first
        true
      else
        false
      end
    else
      false
    end
  end

# refactor!
  class Verifier
    def friend(id1, id2)

    end

    def active_post(user_id, posting_id)

    end

    def message_guard(id1, id2, reply, posting_id)
      if reply == 'false'
        self.friend(id1, id2)
      elsif reply == 'true'
        self.active_post(id2, posting_id)
      else
        false
      end
    end
  end
end
