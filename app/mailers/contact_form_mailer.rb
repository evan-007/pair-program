class ContactFormMailer < ActionMailer::Base
  default from: "from@example.com"
  @admin = 'admin@example.com'

  def contact_email(args)
    @from = args[:from]
    @body = args[:body]
    @title = args[:title]
    mail(to: @admin, subject: @title)
  end
end
