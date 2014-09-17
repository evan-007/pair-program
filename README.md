#README

[![Build Status](https://travis-ci.org/evan-007/pair-program.svg?branch=master)](https://travis-ci.org/evan-007/pair-program)

demo: <a href='http://tranquil-tor-7118.herokuapp.com'>http://tranquil-tor-7118.herokuapp.com</a>. Demo
loads super slow, refresh page if initial load looks weird.

`clone` and `bundle install && rake db:create db:migrate db:seed`

##Dev Builds

The dev app has 3 parts: rails, redis and gulp. Run rails with `rails s`, angular with `cd client && gulp`.
Redis is required by SideKiq and runs via `config/initializers/redis.rb`.

Install redis: `brew install redis`.

Rails api lives in the rails app as usual, the angular app is in `client`.
`cd client && bower install && npm install` to install dependencies for the
front end. In `client`, run unit tests with `karma start`.

##Secrets!
`cp environment_variables.yml.example environment_variables.yml` and update
with real info for mailer. If deploying to heroku, this is bypassed and set via `heroku config`.

##Testing

Rails unit tests: `rspec`

Angular unit tests: `cd client && karma start` !!work in progress!!

End-to-end tests with protractor are run against `port 3000` and the rails app.
Any changes to the client need to be added to the build first: `gulp build`.
To run protractor, `cd client && gulp e2e-test`. If tests fail, the rails daemon may need to be
killed manually with `gulp rails-kill`.


##Seed Data

`rake db:seed` uses minimal nonsense data to keep e2e tests speedy. Use `rake seed_data` to add
more meaningful Faker data. Clear DB before running either.

##Deployment

Deploy to heroku with `heroku create` `git push heroku master`. Be sure that
`application_controller` has  `skip_before_filter :verify_authenticity_token
` commented out in production and `protect_from_forgery with: :null_session` is
set. Also set the heroku domain in `config/app_config.yml` to allow CORS.

If deploy does not show `index.html` and returns `status 404`, set
`config.serve_static_assets = true` in `production.rb` (Rails 4 default is `false`).

Don't forget `heroku run rake db:migrate db:seed` after deploying.

##Issues
Angular-google-maps and the $async validations need different versions of angular?
wtf


##To do

change `app_config.yml` to use an env variable for `client/origin`

update client `messages` to reflect using `workflow_state` to track `read?` and
NOT a db column.

create migration to drop `read?` from messages table

remove old client services / refactor all to restangular

add unit tests to client

Add 'viewing deleted messages' feature to client / API

Add 'editing user profiles' feature to client / API

Fix broken CSS / make design not look like trash

Fix broken maps

Finish setup on non-heroku server (create DB + add env variables)
