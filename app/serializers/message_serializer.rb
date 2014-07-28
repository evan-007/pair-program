class MessageSerializer < ActiveModel::Serializer
  attributes :body, :title, :sender_id, :sender_name, :receiver_name, :id, :created_at, :read?

  def sender_name
    User.find(object.sender_id).username
  end

  def receiver_name
    User.find(object.receiver_id).username
  end
end
