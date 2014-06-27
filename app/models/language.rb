class Language < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :user_languages, dependent: :destroy, inverse_of: :language
  has_many :users, through: :user_languages, inverse_of: :languages
end
