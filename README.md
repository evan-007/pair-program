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

To run protractor, `cd client && gulp e2e-test`.

Protractor is run against `port 3000` and the client build. `gulp e2e-test` will generate a new build,
start rails via a daemon, seed/reset the dev db, run protractor tests, and kill the rails daemon.
If tests fail, the rails daemon may need to be killed manually with `gulp rails-kill`.

For protractor debugging, it's probably easier to run `rails s` and pick and choose which protractor specs to run
via `protractor protractorConfig.js --specs app/tests/e2e/path/to/test.js`.


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

##To do

Protractor refactor signin helper to be use signin instead of login for consistency
change protractor tests to test for alerts! figure out how to not wait for $timeout

remove old client services / refactor all to restangular
 -- put restangular in services! stop using it bare in resolves

add unit tests to client

Fix broken CSS / make design not look like trash
 -- uses bootstrap theme: `http://bootswatch.com/spacelab/`
 -- theme is committed to git and bootstrap is NOT a bower dependency
 -- laptop-size menu button doesn't work on click

Using `develop` branch of angular-google-maps. See weird `'angular-google-maps'.ng()` in `app.js`
Working on commit `e38208e60c0415d758`. So unstable. Careful until official 1.3 support role out.

Sidekiq: jobs get enqueued, deploy task doesn't actually start sidekiq?
  can launch manually on server: `bundle exec sidekiq -d -L sidekiq.log -q mailer,5 -q default -e production`
  WTF?

Setup CI for jasmine/protractor

WTF deploy task needs to be run twice sometimes?

##Wishlist

Firebase for realtime updates on message/friend stuff

password resets

onboarding

avatar uploads

change Postings to Proposals or something else

cron job, check postings at midnight, drop when 2 weeks old? - whenever gem

##Contributing

Do it!
