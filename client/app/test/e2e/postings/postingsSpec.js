var helper = require('../helpers/signinHelper')

describe('Postings', function(){
  beforeEach(function(){
    helper.login();
    
    postingsMain = element(by.name('postings-nav'));

  });
  afterEach(function(){
    browser.manage().clearAllCookies();
  });

  it('users can add postings', function(){

  })

  xit('users can edit their own postings', function(){

  })

  xit('users cannot edit other\'s postings', function(){

  })
})
