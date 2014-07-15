class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email, :location, :gravatar_hash
  has_many :languages
end
