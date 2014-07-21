class ConversationSerializer < ActiveModel::Serializer
  attributes :subject, :created_at, :id
end