var helper = require('../helpers/signinHelper')

describe('User profiles', function(){
  beforeEach(function(){
    helper.login();
  });

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('can be edited by the user', function(){
    menu = element(by.id('menu'));
    profileLink = element(by.id('profile-link'));

    menu.click();
    profileLink.click();
  })
});
