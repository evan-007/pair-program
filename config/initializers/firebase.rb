firebase_uri = ENV['FIREBASE_URI']

$firebase = Firebase::Client.new(firebase_uri)
