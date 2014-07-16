class FriendSerializer < ActiveModel::Serializer
  attributes :username, :friend_id, :gravatar_hash, :languages
  
  
  def user
    User.find(object.friend_id)
  end
  
  def username
    user.username
  end
  
  def gravatar_hash
    user.gravatar_hash
  end
  
  def languages
    #bad, this includes metadata that shouldn't show to users
    user.languages
  end
end