class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email, :location
  has_many :languages
end