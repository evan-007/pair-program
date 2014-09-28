require 'rails_helper'

# How to STUB http calls?

RSpec.describe FbHandler, type: :model do
  # before do
  #   @fb = FbHandler.new
  #   @user = create(:user)
  # end
  describe '#set' do
    it 'sets user data' #do
    #   # how to test???
    #   @fb.set(@user)
    # end
  end
  describe '#get' do
    # before do
    #   @fb.set(@user)
    # end
    it 'gets user data' #do
    #   response = @fb.get(@user)
    #   expect(response.body['messages']).to eq 0
    # end
  end

  describe '#incr_messages' do
    # before do
    #   @fb.set(@user)
    # end
    it 'increases messages count by 1' #do
    #   @fb.incr_messages(@user)
    #   response = @fb.get(@user)
    #   expect(response.body['messages']).to eq 1
    # end
  end

  describe '#decr_messages' do
    # before do
    #   @fb.set(@user)
    # end
    it 'decreases messages count by 1' #do
    #   @fb.incr_messages(@user)
    #   @fb.decr_messages(@user)
    #   response = @fb.get(@user)
    #   expect(response.body['messages']).to eq 0
    # end
    it 'doesn\'t go below 0' #do
    #   3.times { @fb.decr_messages(@user) }
    #   response = @fb.get(@user)
    #   expect(response.body['messages']).to eq 0
    # end
  end
end
