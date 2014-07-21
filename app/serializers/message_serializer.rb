class MessageSerializer < ActiveModel::Serializer
  attributes :body, :subject, :username
  
  def username
    User.find(object.sender_id).username
  end
end