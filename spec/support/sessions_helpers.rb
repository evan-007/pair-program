module SessionHelpers
	def sign_in(user)
		new_auth_header = user.create_new_auth_token

	  @auth_headers = user.create_new_auth_token
		@token = @auth_headers['access-token']
		@client_id = @auth_headers['client']
		@expiry = @auth_headers['expiry']
		request.headers.merge!(@auth_headers)
	end
end
