class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true
	has_secure_password
  
  has_many :user_languages, dependent: :destroy, inverse_of: :user
  has_many :languages, through: :user_languages, inverse_of: :users
end
