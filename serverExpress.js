var express = require('express')
var app = express()

// app.set(name, value)
// app.get(name)
// app.get(path, callback)
// app.post(path, callback)
// app.route(path).get(callback).post(callback)

// req
// req.query, query string parameters
// req.params, routing parameters
// req.body, body parser
// req.path, req.host, req.ip

// res
// res.status(code)
// res.set(field, [value])
// res.redirect([status], url)
// res.send([body[status]], [body])
// res.json([body|status], [body])

app.get('/', function(req, res) {
	res.send('Hello World')
});