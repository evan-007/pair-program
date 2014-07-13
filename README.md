#README

`clone` and `bundle install && rake db:create db:migrate db:seed`

Rails api lives in the rails app as usual, the angular app is in `client`.
`cd client && bower install && npm install` to install dependencies for the
front end. In `client`, run unit tests with `karma start`.

##Integration tests
 `protractor protractor.conConfig.js`.

##Deployment

Deploy to heroku with `heroku create` `git push heroku master`. Be sure that
`application_controller` has  `skip_before_filter :verify_authenticity_token
` commented out in production and `protect_from_forgery with: :null_session` is
set. Also set the heroku domain in `app_config` to allow CORS.

If deploy does not show `index.html` and returns `status 404`, set
`config.serve_static_assets = true` in `production.rb` (Rails 4 default is `false`).

Don't forget `heroku run rake db:migrate db:seed` after deploying.
