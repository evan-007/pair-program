class UserSerializer < ActiveModel::Serializer
  attributes :username, :token, :id
  has_many :languages
end
