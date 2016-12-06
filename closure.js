// Basic closure
function parent() {
	var x = 1;

	function child() {
		console.log(x)
	}

	return child;
}

var childFn = parent();
childFn();

// Use of closure

function prefix(pre) {
	return function fileHandler(err, data) {
	console.log(pre + "\t " + data.toString());
	} 
}
var say 	= prefix("Say:")
var shout 	= prefix("Shout:")

var fs = require('fs');
fs.readFile('filetest.txt', say)
fs.readFile('filetest.txt', shout)