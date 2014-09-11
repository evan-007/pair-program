class ApprovedFriendSerializer < ActiveModel::Serializer
  attributes :username, :email, :about, :latitude, :longitude, :location,
  :gravatar_hash, :mentor?, :student?, :just_partner?
  has_many :languages
end
