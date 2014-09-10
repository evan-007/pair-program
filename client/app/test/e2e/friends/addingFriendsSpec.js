var helper = require('../helpers/signinHelper')

describe('Adding friends', function(){
  it('users can request any user to be their friend', function(){
    helper.login();
    friendIcon = element(by.css('fa fa-search fa-3x'));

    friendIcon.click();
    expect(browser.getCurrentUrl()).toMatch('#/friends');
  })
})
