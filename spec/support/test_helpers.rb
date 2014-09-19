module TestHelpers
	def sign_in(user)
		request.headers["token"] = user.token
		request.headers["username"] = user.username
	end

	def json
		@json ||= JSON.parse(response.body)
	end
end
