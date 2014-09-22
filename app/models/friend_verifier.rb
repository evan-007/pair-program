class FriendVerifier
  def verify(id1, id2)
    if Friendship.where(user_id: id1, friend_id: id2).first || Friendship.where(user_id: id2, friend_id: id1).first
      true
    else
      false
    end
  end
end
