class ContactFormSender
  include Sidekiq::Worker

  def perform(args)
    ContactFormMailer.contact_email(args).deliver
  end
end
