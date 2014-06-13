require 'rails_helper'

feature 'Signing up' do
  scenario 'users can signup' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'asdf_admin'
    fill_in 'Email', with: 'me@random.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password_confirmation', with: 'password'
    click_link 'Sign up'
    expect(page).to have_content('Thanks for signing up')
  end
end
