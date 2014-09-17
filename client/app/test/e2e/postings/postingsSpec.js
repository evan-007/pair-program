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
    titleInput = element(by.model('posting.title'));
    bodyInput = element(by.model('posting.body'));
    submitButton = element(by.buttonText('Submit'));
    newPostingLink = element(by.name('new-posting'));

    postingsMain.click();
    newPostingLink.click();
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
    lastPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).last();
    editButton = element(by.buttonText('Edit'));
    titleInput = element(by.name('edit-title'));
    saveButton = element(by.buttonText('Save changes'));
    newTitle = 'edited title'

    postingsMain.click();
    lastPosting.click();
    editButton.click();
    titleInput.clear();
    titleInput.sendKeys(newTitle);
    saveButton.click();

    postingsList = element.all(by.repeater('posting in activePostings').column('posting.title'))
    .map(function(elem){
      return elem.getText();
    })

    expect(postingsList).toContain(newTitle);
  })

  it('users cannot edit other\'s postings', function(){
    firstPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).first();
    editButton = element(by.buttonText('Edit'));

    postingsMain.click();
    firstPosting.click();

    expect(editButton.isDisplayed()).toEqual(false);
  })

  it('users can delete their own postings', function(){
    lastPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).last();
    editButton = element(by.buttonText('Edit'));
    deleteButton = element(by.buttonText('Delete'));

    postingsMain.click();
    lastTitle = lastPosting.getText();
    lastPosting.click();
    editButton.click();
    deleteButton.click();

    titles = element.all(by.repeater('posting in activePostings').column('posting.title')).map(function(elem){
      return elem.getText();
    })

    expect(titles).not.toContain(lastTitle);
  })
})
