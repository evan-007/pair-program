require 'rails_helper'

RSpec.describe Language, :type => :model do
  it { should validate_presence_of :name }
  it { should validate_uniqueness_of :name }
  it { should have_many :users }
  it { should have_many(:user_languages).dependent(:destroy) }

  describe ':tokens' do
    before do
      @language = create(:language, name: 'ruby')
    end

    it 'returns languages that match the query' do
      @return = Language.tokens('ruby')
      expect(@return[0]["name"]).to eq @language.name
    end

  end
end
