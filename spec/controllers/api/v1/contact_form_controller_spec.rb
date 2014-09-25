require 'rails_helper'

RSpec.describe Api::V1::ContactFormController, type: :controller do
  describe 'POST :create' do
    it 'sends a message' do
      # this doesn't actually test if message was sent!
      post :create, { contact: { title: 'asdf', body: 'asdasdf', from: 'asdf@asdf.com' } }
      expect(response.status).to eq 200
    end
  end
end
