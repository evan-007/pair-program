module Api
  module V1
    class ContactFormController < ApplicationController
      def create
        ContactFormSender.perform_async(contact_params)
        render nothing: true, status: 200
      end

      private
        def contact_params
          params.require(:contact).permit(:title, :from, :body)
        end
    end
  end
end
