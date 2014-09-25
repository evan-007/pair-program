unless ENV["REDISTOGO_URL"].blank?
  uri = URI.parse(ENV["REDISTOGO_URL"])
  $redis = Redis.new(:url => ENV['REDISTOGO_URL'])
else
  $redis = Redis.new(host: 'localhost', port: 6379)
end
