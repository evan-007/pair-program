class MessageGuard

  def check(id1, id2, reply, *id)
    if reply == 'false'
      FriendVerifier.new.verify(id1, id2)
    elsif reply == 'true'
      puts id
      if User.find(id2).postings.where(id: id).first
        true
      else
        false
      end
    else
      false
    end
  end

end
