class UserLanguage < ActiveRecord::Base
  #valid on :user, not :user_id
  validates :user, presence: true
  validates :language, presence: true

  belongs_to :user, inverse_of: :user_languages
  belongs_to :language, inverse_of: :user_languages
end
