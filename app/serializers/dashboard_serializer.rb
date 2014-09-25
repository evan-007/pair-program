class DashboardSerializer < ActiveModel::Serializer
  attributes :messages, :new_friends, :postings

  def messages
    object.messages
  end

  def new_friends
    object.new_friends
  end

  def postings
    object.postings
  end
end
