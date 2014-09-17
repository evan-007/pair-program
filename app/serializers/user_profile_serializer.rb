class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :email, :location, :gravatar_hash,
    :mentor?, :student?, :just_partner?
  has_many :languages
end
