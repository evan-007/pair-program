class MessageSerializer < ActiveModel::Serializer
  attributes :body, :title, :sender_name, :receiver_name
  
  def sender_name
    User.find(object.sender_id).username
  end
  
  def receiver_name
    User.find(object.receiver_id).username
  end
end