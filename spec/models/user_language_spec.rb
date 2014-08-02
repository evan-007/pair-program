require 'rails_helper'

RSpec.describe UserLanguage, :type => :model do
  it { should validate_presence_of :user}
  it { should validate_presence_of :language}
  it { should belong_to :user }
  it { should belong_to :language }
end
