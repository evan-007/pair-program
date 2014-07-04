class UserSerializer < ActiveModel::Serializer
  attributes :username, :about, :avatar, :email, :token
end