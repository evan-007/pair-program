class ContactFormMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_email(args)
    @from = args[:from]
    @body = args[:body]
    @title = args[:title]
    mail(to: $contact_email, subject: 'Contact form')
  end
end
