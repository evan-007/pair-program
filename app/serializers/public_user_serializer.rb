class PublicUserSerializer < ActiveModel::Serializer
  attributes :username, :latitude, :longitude, :id, :gravatar_hash
  has_many :languages
end
