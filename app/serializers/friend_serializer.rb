class FriendSerializer < ActiveModel::Serializer
  attributes :username, :friend_id
  
  def username
    User.find(object.friend_id).username
  end
end