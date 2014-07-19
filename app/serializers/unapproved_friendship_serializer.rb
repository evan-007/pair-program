class UnapprovedFriendshipSerializer < ActiveModel::Serializer
  attributes :user, :id

  def user
    PublicUserSerializer.new(User.find(object.user_id))
  end
end
