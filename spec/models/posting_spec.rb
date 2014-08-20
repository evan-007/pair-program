require 'rails_helper'

RSpec.describe Posting, type: :model do
  it { should belong_to :user}
  it { should ensure_length_of(:title).is_at_least(5)}
  it { should ensure_length_of(:body).is_at_least(10)}
  it { should validate_presence_of :user}
end
