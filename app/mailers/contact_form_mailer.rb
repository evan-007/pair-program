class ContactFormMailer < ActionMailer::Base
  default from: "from@example.com"
  admin = CONTACT_EMAIL

  def contact_email(args)
    @from = args[:from]
    @body = args[:body]
    @title = args[:title]
    puts admin
    mail(to: 'evanonrails@gmail.com', subject: @title)
  end
end
