class PostingSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at
  
  has_one :user, serializer: PublicUserSerializer
end
