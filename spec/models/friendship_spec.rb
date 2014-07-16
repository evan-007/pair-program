require 'rails_helper'

RSpec.describe Friendship, :type => :model do
  it { should belong_to :user }
  it { should belong_to :friend }
  it { should validate_presence_of :user_id }
  it { should validate_presence_of :friend_id}
end
