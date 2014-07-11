require 'rails_helper'

RSpec.describe Api::V1::LanguagesController, type: :controller do
  describe 'GET #index' do
    before do
      3.times { create(:language)}
    end
    
    it 'return an array of all languages' do
      get :index
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      #this is bad
      expect(data["languages"][0]["name"]).to eq 'language1'
      expect(data["languages"][2]["name"]).to eq 'language3'
    end
  end
end