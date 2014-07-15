class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true
	has_secure_password

  geocoded_by :location

  has_many :user_languages, dependent: :destroy, inverse_of: :user
  has_many :languages, through: :user_languages, inverse_of: :users

  after_validation :geocode
  after_validation :ensure_token
  after_validation :generate_gravatar

  def ensure_token
    self.token = generate_token
  end
  
  #store hashed email in db so don't have to send all user emails
  #to angular for privacy protection
  def generate_gravatar
    #unless is to make shoulda validations pass
    unless self.email == nil
      self.gravatar_hash = Digest::MD5.hexdigest(self.email)
    end
  end

  private

    def generate_token
      loop do
        token = SecureRandom.uuid
        break token unless User.where(token: token).first
      end
    end
end
