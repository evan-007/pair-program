var helper = require('../helpers/signinHelper')

describe('User profiles', function(){
  beforeEach(function(){
    helper.signin();
  });

  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  it('can be edited by the user', function(){
    menu = element(by.id('menu'));
    profileLink = element(by.id('profile-link'));
    editButton = element(by.buttonText('Edit Profile'));
    saveButton = element(by.buttonText('Save Changes'))
    useraboutInput = element(by.model('profile.user.about'));
    newAbout = 'I just wanna learn ruby'
    postingsNav = element(by.name('postings-nav'));
    userAboutDisplay = element(by.css('p'));

    menu.click();
    profileLink.click();
    editButton.click();
    expect(useraboutInput.isDisplayed()).toBeTruthy();
    useraboutInput.clear();
    useraboutInput.sendKeys(newAbout);

    //save and reload profile to verify new name
    saveButton.click();
    postingsNav.click();
    menu.click();
    profileLink.click();
    expect(userAboutDisplay.getText()).toEqual(newAbout);
  })
});
