class UserSerializer < ActiveModel::Serializer
  attributes :username, :token, :id
end