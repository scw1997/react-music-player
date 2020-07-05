const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/personalized/**', {
			target: 'http://192.168.43.231:3000',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/song/**', {
			target: 'http://192.168.43.231:3000',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/album**', {
			target: 'http://192.168.43.231:3000',
			changeOrigin: true
		})
	)


}
