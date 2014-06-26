require 'rails_helper'

feature 'Programming languages' do
	before do
		@user = create(:user)
		sign_in @user
	end

	scenario 'users can add languages to their profiles' do
		click_link 'Profile'
		select 'Ruby', from: 'Languages'
		click_button 'Update'
		expect(page).to have_content('Profile updated!')
	end
end
