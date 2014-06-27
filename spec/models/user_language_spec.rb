require 'rails_helper'

RSpec.describe UserLanguage, :type => :model do
  it { should validate_presence_of :user_id }
  it { should validate_presence_of :language_id }
  it { should belong_to :user }
  it { should belong_to :language }
end
