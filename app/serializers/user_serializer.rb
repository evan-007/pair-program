class UserSerializer < ActiveModel::Serializer
  attributes :username, :about, :avatar
end