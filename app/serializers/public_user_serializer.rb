class PublicUserSerializer < ActiveModel::Serializer
  attributes :username, :latitude, :longitude, :id, :gravatar_hash,
    :mentor, :student, :just_partner, :about
  has_many :languages
end
