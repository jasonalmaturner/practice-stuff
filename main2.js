// Work on this toy problem until 9:20ish. We'll review a couple of solutions until 9:30,
// and then work on the project review until 10:00

// “Write a function called finder that accepts two parameters, 
// the first one is a string and the second is an array. 
// Have your function return true if the string is found in the array and false if it is not”
// var nums = [“hello”, “javascript”, “awesome”];
// finder(“javascript”, nums); //true
// finder(“lame”, nums); //false

var pets = ['dog', 'cat', 'red breasted merganser', 'duck billed platypus', 'emu', 'hedgehog'];

var finder = function (string, array) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] === string) {
			return true;
		}
	}
	return false;
}

var finder2 = function(string, array) {
	if(array.indexOf(string) !== -1) {
		return true;
	} else {
		return false;
	}
}

var first = ['Tyler', 'Ean', 'Cahlan'];
var last = ['McGinnis', 'Platter', 'Sharp'];

function combinator(firstName, lastName) {
	var newArray = [];
	var tempArray = [];
	for(var i = 0; i < firstName.length; i++) {
		tempArray.push(first[i], last[i]);
		newArray.push(tempArray.join(' '));
		tempArray = [];
	}
	return newArray;
}

function combinator2(first, last) {
	var newArray = [];
	for(var i = 0; i < first.length; i++) {
		newArray.push(first[i] + ' ' + last[i]);
	}
	return newArray;
}


var sum = function(array, cb) {
	var total = 0;
	for(var i = 0; i < array.length; i++) {
		total += array[i];
	};
	cb(total);
}
sum([1,4,3,5,2,8], function(total) {
	console.log('The total sum of the array is ' + total);
});

function reverse (string) {
	var newString = "";
	for(var i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
}

function factorial1 (n) {
	for(var i = n; i > 0; i--){
		console.log(i);
	}
}

function factorial2 (n) {
	var answer = n;
	for(var i = n - 1; i > 0; i--){
		answer = answer + ' * ' + i;
	}
	return answer;
};

function factorial3 (n) {
	var answer = n;
	for(var i = n - 1; i > 0; i--){
		answer = answer * i;
	}
	return answer;
}