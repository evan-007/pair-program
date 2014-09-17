class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email, :location, :gravatar_hash, :id,
    :mentor?, :student?, :just_partner?, :about
  has_many :languages
end
