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

  it('users can edit their own postings', function(){
    postingsMain.click();
    lastPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).last();

    lastPosting.click();
    editButton = element(by.buttonText('Edit'))

    editButton.click();

    newTitle = 'edited title'

    titleInput = element(by.name('edit-title'));
    titleInput.clear();
    titleInput.sendKeys(newTitle);
    element(by.buttonText('Save changes')).click();

    postingsList = element.all(by.repeater('posting in activePostings').column('posting.title'))
    .map(function(elem){
      return elem.getText();
    })

    expect(postingsList).toContain(newTitle);
  })

  it('users cannot edit other\'s postings', function(){


    postingsMain.click();
    firstPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).first();
    firstPosting.click();

    editButton = element(by.buttonText('Edit'));
    expect(editButton.isDisplayed()).toEqual(false);

  })

  it('users can delete their own postings', function(){

    postingsMain.click();

    //depends on previous test!
    lastPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).last();
    lastTitle = lastPosting.getText();
    lastPosting.click();

    editButton = element(by.buttonText('Edit'));
    editButton.click();

    deleteButton = element(by.buttonText('Delete'));
    deleteButton.click();

    titles = element.all(by.repeater('posting in activePostings').column('posting.title')).map(function(elem){
      return elem.getText();
    })

    expect(titles).not.toContain(lastTitle);
  })
})
