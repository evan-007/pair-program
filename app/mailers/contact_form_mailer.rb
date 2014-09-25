class ContactFormMailer < ActionMailer::Base
  default from: "from@example.com"
  @admin = ENV['CONTACT_EMAIL'] 

  def contact_email(args)
    @from = args[:from]
    @body = args[:body]
    @title = args[:title]
    mail(to: @admin, subject: @title)
  end
end
