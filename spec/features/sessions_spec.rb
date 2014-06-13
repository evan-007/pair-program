require 'rails_helper'

feature 'Sessions spec' do
	before do 
		@user = create(:user)
	end

	scenario 'signing in with valid credentials' do
		visit '/'
		click_link 'Sign in'
		fill_in 'Email', with: @user.email
		fill_in 'Password', with: @user.password
		click_button 'Sign in'
		expect(page).to have_content("You're logged in!")
	end

	scenario 'signing in with invalid credentials' do
		visit '/'
		click_link 'Sign in'
		fill_in 'Email', with: 'me@someplace.com'
		fill_in 'Password', with: 'notvalid'
		click_button 'Sign in'
		expect(page).to have_content("Opps, is your password correct?")
	end

	scenario 'signing out' do
		@user = create(:user)
		sign_in @user
		click_link 'Sign out'
		expect(page).to have_content('Signed out!')
	end
end