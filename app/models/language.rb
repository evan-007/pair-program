class Language < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :user_languages, dependent: :destroy, inverse_of: :language
  has_many :users, through: :user_languages, inverse_of: :languages

  def self.tokens(query)
    languages = where("name like ?", "%#{query}")
    if languages.empty?
      [{id: "<<<#{query}>>>", name: "New: \"#{query}\""}]
    end
  end
end
