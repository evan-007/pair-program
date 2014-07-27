class Language < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :user_languages, dependent: :destroy, inverse_of: :language
  has_many :users, through: :user_languages, inverse_of: :languages


  def self.tokens(query)
    languages = self.where("name ILIKE ?", "%#{query}%")
    if languages.empty?
      languages << {id: "<<<#{query}>>>", name: "New:\"#{query}\"", text: "New:\"#{query}\"" }
    end
    languages
  end

  def self.ids_from_tokens(tokens)
    tokens.gsub!(/<<<(.+?)>>>/) { Language.create!(name: $1).id }
    puts tokens.split(' ')
    return tokens.split(' ')
  end
end
