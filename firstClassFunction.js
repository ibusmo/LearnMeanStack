
// Require
exports.sayWhat = sayWhat

// First-class function

// Function as Variable
var myname = function myNameFn() {
	console.log("Sukkhee");
}

// Function as Parameter
function say(what) {
	what();
}

say(myname);

// Function as Return
function sayFn() {
	return function myName() {
		console.log("Omsub")
	}
}

sayFn()();

// For exports
function sayWhat() {
	sayFn()();
}