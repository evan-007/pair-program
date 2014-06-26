require 'rails_helper'

feature 'Friends' do
	before do
		@user = create(:user)
	end

	scenario 'users can find other users with similar skills' do
		visit fail_path
	end
	scenario 'users can request friendships' do
		visit fail_path
	end
end