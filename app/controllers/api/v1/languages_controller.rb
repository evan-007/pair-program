module Api
  module V1
    class LanguagesController < ApplicationController
      
      def index
        if params[:q].blank?
          @languages = Language.all
        else
          @languages = Language.tokens(params[:q])
        end
        render json: @languages, status: 200, each_seralizer: LanguageSerializer
      end

    end
  end
end
