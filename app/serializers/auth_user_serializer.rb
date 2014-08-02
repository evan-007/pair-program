class AuthUserSerializer < ActiveModel::Serializer
  attributes :username, :token, :id
end
