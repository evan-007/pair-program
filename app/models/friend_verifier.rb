class FriendVerifier

  def check(id1, id2, reply, *id)
    if reply == 'false'
      if Friendship.where(user_id: id1, friend_id: id2).first || Friendship.where(user_id: id2, friend_id: id1).first
        true
      else
        false
      end
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
