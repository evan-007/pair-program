exports.config = {
baseUrl: 'http://localhost:3000',
	specs: ['app/test/e2e/**/*Spec.js'],
	exclude: ['./app/test/e2e/helpers/*'],
	jasmineNodeOpts: {defaultTimeoutInterval: 60000}
}
