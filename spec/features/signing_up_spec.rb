require 'rails_helper'

feature 'Signing up' do
  scenario 'users can signup with valid info' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'asdfadmin'
    fill_in 'Email', with: 'me@random.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Create User'
    expect(page).to have_content('Thanks for signing up')
  end

  scenario 'users cannot signup with invalid info' do
    visit root_path
    click_link 'Sign up'
    click_button 'Create User'
    expect(page).to have_content('Sorry')
  end
end
