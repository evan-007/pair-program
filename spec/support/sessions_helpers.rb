module SessionHelpers
	def sign_in(user)
		new_auth_header = user.create_new_auth_token
		request.headers.merge!(new_auth_header)
	end
end
