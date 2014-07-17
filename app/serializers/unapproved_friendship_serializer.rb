class UnapprovedFriendshipSerializer < ActiveModel::Serializer
  attributes :user
  
  def user
    PublicUserSerializer.new(User.find(object.user_id))
  end
end