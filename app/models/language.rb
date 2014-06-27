class Language < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :user_languages, dependent: :destroy
  has_many :users, through: :user_languages
end
