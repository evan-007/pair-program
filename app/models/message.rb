class Message < ActiveRecord::Base
  include Workflow
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
  
  workflow do
    state :unread do
      event :request, transitions_to: :read
    end
  end
end
