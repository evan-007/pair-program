class FriendSerializer < ActiveModel::Serializer
  attributes :friend_name, :friend_id
  
  def friend_name
    User.find(object.friend_id).username
  end
end