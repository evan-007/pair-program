class UserLanguage < ActiveRecord::Base
  validates :user_id, presence: true
  validates :language_id, presence: true
  
  belongs_to :user, inverse_of: :user_languages
  belongs_to :language, inverse_of: :user_languages
end
