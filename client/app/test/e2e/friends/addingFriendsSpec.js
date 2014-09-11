var helper = require('../helpers/signinHelper')

describe('Adding friends', function(){
  beforeEach(function(){
    helper.login();
  })

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('users can request any user to be their friend', function(){
    friendIcon = element(by.css('fa fa-search fa-3x'));

    friendIcon.click();
    expect(browser.getCurrentUrl()).toMatch('#/friends');
  })
})
