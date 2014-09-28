class FbHandler
  def set(user)
    $firebase.set(user.id, { messages: user.unread_messages,
      requests: user.friend_requests})
  end
end
