class FbHandler
  def set(user)
    $firebase.set(user.id, { messages: user.unread_messages,
      requests: user.friend_requests})
  end

  def get(user)
    $firebase.get(user.id)
  end

  def incr_messages(user)
    resp = $firebase.get(user.id)
    update = resp.body['messages'] + 1
    $firebase.update(user.id, { messages: update})
  end

  def decr_messages(user)
    resp = $firebase.get(user.id)
    unless resp.body['messages'] == 0
      count = resp.body['messages'] -1
    else
      count = 0
    end
    $firebase.update(user.id, { messages: count})
  end
end
