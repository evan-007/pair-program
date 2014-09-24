class Posting < ActiveRecord::Base
  belongs_to :user
  validates :user, presence: true
  validates :title, length: { minimum: 5 }
  validates :body, length: { minimum: 10 }
  validates :title, :body, presence: true
end
