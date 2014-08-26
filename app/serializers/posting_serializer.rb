class PostingSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  
  has_one :user, serializer: PublicUserSerializer
end
