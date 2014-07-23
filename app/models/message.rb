class Message < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
end
