class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email, :location, :gravatar_hash, :id,
    :mentor?, :student?, :just_partner?
  has_many :languages
end
