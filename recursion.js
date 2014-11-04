var factorial = function(n) {
	debugger;
	if(n < 1){
		return 1;
	}
	return n * factorial(n - 1);
}
factorial(5);

var bunnyEars = function(bunny){
	if(bunny < 1){
		return 0;
	}
	return 2 + bunnyEars(bunny - 1);
}
bunnyEars(6);

var fibonacci = function(n){
	debugger;
	if(n === 1){
		return 0;
	} else if (n === 2){
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(3);

var oddBunnyEars = function(bunny){
	if(bunny < 1){
		return 0;
	}else	if(bunny % 2 === 0){
		return 2 + oddBunnyEars(bunny - 1);
	}else if(bunny % 2 !== 0){
		return 3 + oddBunnyEars(bunny - 1);
	}
}
oddBunnyEars(4);

var exponential = function(n,e){
	if(e < 1){
		return 1;
	}
	return n * exponential(n, e - 1)
}
exponential(3,6);

var changeXY = function(str){
	if(str.length < 1){
		return "";
	}
	if(str[0] === "x"){
		return "y" + changeXY(str.slice(1))
	}
	return str[0] + changeXY(str.slice(1))
}
changeXY("codex")

var noX = function(str){
	if(str.length < 1){
		return "";
	}else if(str[0] === "x"){
		return noX(str.slice(1))
	}
	return str[0] + noX(str.slice(1));
}
noX("codex");

// Merge sort
var sortArray = function(arr){
	while(arr.length > 1){
		var x = Math.floor(arr.length/2);
		var left = arr.slice(0, x);
		var right = arr.slice(x);

		return mergeArrays(sortArray(left), sortArray(right));
	}
	return arr;
}

var mergeArrays = function(left, right){
	var newArr = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			newArr.push(left.shift());				
		} else {
			newArr.push(right.shift());
		}
	}
	while(left.length){
		newArr.push(left.shift());
	}
	while(right.length){
		newArr.push(right.shift());
	}
	return newArr;
}
var originalArray = [5,8,9,4,7,3,1,2];
sortArray(originalArray);