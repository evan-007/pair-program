class MapUserSerializer < ActiveModel::Serializer
  attributes :username, :latitude, :longitude, :id
  has_many :languages
end
