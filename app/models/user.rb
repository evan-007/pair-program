class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true
	has_secure_password
  acts_as_messageable

  geocoded_by :location

  has_many :user_languages, dependent: :destroy, inverse_of: :user
  has_many :languages, through: :user_languages, inverse_of: :users
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
  has_many :inverse_friendships, dependent: :destroy, class_name: 'Friendship', foreign_key: 'friend_id'
  has_many :inverse_friends, through: :inverse_friendships, source: :user

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

  def friend_ids
    ids = []
    self.friendships.where(workflow_state: 'approved').each do |f|
      ids.push(f.friend_id)
    end
    self.inverse_friendships.where(workflow_state: 'approved').each do |f|
      ids.push(f.user_id)
    end
    ids
  end

  def all_friendship_ids
    ids = []
    self.friendships.each do |f|
      ids.push(f.friend_id)
    end
    self.inverse_friendships.each do |f|
      ids.push(f.user_id)
    end
    ids
  end

  def not_friends
    ids = User.all.map {|u| u.id}.sort
    return ids - self.all_friendship_ids.push(self.id).sort
  end

  def pending_friends
    ids = []
    self.friendships.each do |f|
      if f.workflow_state == 'unapproved'
        ids.push(f.friend_id)
      end
    end
    ids
  end

  private

    def generate_token
      loop do
        token = SecureRandom.uuid
        break token unless User.where(token: token).first
      end
    end
end
