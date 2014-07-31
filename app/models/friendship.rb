class Friendship < ActiveRecord::Base
  include Workflow
  belongs_to :user
  belongs_to :friend, class_name: 'User'

  validates :user_id, :friend_id, presence: true

  workflow do
    state :unapproved do
      event :approve, transitions_to: :approved
      event :reject, transitions_to: :rejected
    end
    state :approved
    state :rejected do
      event :approve, transitions_to: :approved
    end
  end
end
