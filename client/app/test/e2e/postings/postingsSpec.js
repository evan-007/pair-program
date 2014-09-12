var helper = require('../helpers/signinHelper')

describe('Postings', function(){
  beforeEach(function(){
    helper.login();

    postingsMain = element(by.name('postings-nav'));

  });
  afterEach(function(){
    browser.manage().deleteAllCookies();
  });

  var newTitle;

  it('users can add postings', function(){
    postingsMain.click();
    element(by.name('new-posting')).click();

    titleInput = element(by.model('posting.title'));
    bodyInput = element(by.model('posting.body'));
    submitButton = element(by.buttonText('Submit'));

    titleInput.sendKeys('this is my new post');
    bodyInput.sendKeys('this is the body of the posting');
    newTitle = 'this is my new post';
    submitButton.click();

    postingsList = element.all(by.repeater('posting in activePostings').column('posting.title')).
    map(function(elem){
      return elem.getText();
    })

    expect(postingsList).toContain(newTitle);
  })

  xit('users can edit their own postings', function(){

  })

  xit('users cannot edit other\'s postings', function(){

  })
})
