class Message < ActiveRecord::Base
  include Workflow

  validates :title, presence: true
  validates :body, presence: true

  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  workflow do
    state :unread do
      event :request, transitions_to: :read
      event :trash, transitions_to: :trashed
    end
    state :read do
      event :trash, transitions_to: :trashed
      event :request, transitions_to: :read
    end
    state :trashed do
      #smell
      event :request, transitions_to: :trashed
    end
  end
end
