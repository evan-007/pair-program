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

  iit('users can add postings', function(){
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

  iit('users can edit their own postings', function(){
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

  iit('users cannot edit other\'s postings', function(){


    postingsMain.click();
    firstPosting = element.all(by.repeater('posting in activePostings').column('posting.title')).first();
    firstPosting.click();

    editButton = element(by.buttonText('Edit'));
    expect(editButton.isDisplayed()).toEqual(false);

  })

  iit('users can delete their own postings', function(){

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
