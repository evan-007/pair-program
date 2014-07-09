#README

`clone` and `bundle install && rake db:create db:migrate db:seed`

Rails api lives in the rails app as usual, the angular app is in `client`.
`cd client && bower install && npm install` to install dependencies for the
front end. In `client`, run unit tests with `karma start`.

##Integration tests
 `protractor protractor.conConfig.js`.
