require 'rails_helper'

RSpec.describe Posting, type: :model do
  it { should belong_to :user}
  #it should have a title longer than...
end
