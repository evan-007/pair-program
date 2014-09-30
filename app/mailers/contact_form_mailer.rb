class ContactFormMailer < ActionMailer::Base
  default from: "from@example.com"
  default to: CONTACT_EMAIL

  def contact_email(args)
    @from = args[:from]
    @body = args[:body]
    @title = args[:title]
    mail(subject: 'Contact form')
  end
end
