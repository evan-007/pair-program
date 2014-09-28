class FbUpdater
  include Sidekiq::Worker

  def perform(user_id)
    user = User.find(user_id)
    FbHandler.new.set(user)
  end
end
