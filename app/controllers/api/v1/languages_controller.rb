module Api
  module V1
    class LanguagesController < ApplicationController
      def index
        @languages = Language.all
        render json: @languages, status: 200, each_seralizer: LanguageSerializer
      end
    end
  end
end