

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
}

var helloWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World')
}

var goodbyeWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Goodbye World');
}

var connect = require('connect');
var app = connect();

app.use(logger);
app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld)

app.listen(3000);
console.log('Server running at http://localhost:3000')