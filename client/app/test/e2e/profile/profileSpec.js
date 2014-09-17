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
    editButton = element(by.buttonText('Edit Profile'));
    saveButton = element(by.buttonText('Save Changes'))
    usernameInput = element(by.model('profile.user.username'));
    usernameDisplay = element(by.binding('profile.user.username'));
    newName = 'my name is name'
    postingsNav = element(by.name('postings-nav'));

    menu.click();
    profileLink.click();
    editButton.click();
    expect(usernameInput.isDisplayed()).toBeTruthy();
    usernameInput.clear();
    usernameInput.sendKeys(newName);

    //save and reload profile to verify new name
    saveButton.click();
    postingsNav.click();
    menu.click();
    profileLink.click();
    expect(usernameDisplay.getText()).toEqual(newName);

  })
});
