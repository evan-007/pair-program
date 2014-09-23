class PublicUserSerializer < ActiveModel::Serializer
  attributes :username, :latitude, :longitude, :id, :gravatar_hash, :mentor, :student, :just_partner
  has_many :languages
end
