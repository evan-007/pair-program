class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email
  has_many :languages
end