class MapUserSerializer < ActiveModel::Serializer
  attributes :username, :latitude, :longitude, :id
end