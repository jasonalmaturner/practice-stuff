var reverseArray = function(str){
	var newArr = str.split('');
	var reverseArray = [];
	for(var i = 0; i < newArr.length; i++){
        reverseArray.unshift(newArr[i]);
	};
	return reverseArray.join('');
}
var myName = 'Jason Alma Turner';
alert(reverseArray(myName));

var factorial = function(num){
    if(num === 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};
alert(factorial(7));
/*
var factorial =  function(x){
    var y
    for(var i = x; i > x; i--){
        var z = x * (x - 1);
        y = z + y;
    }
    return y;
}
alert(factorial(5));*/
//This above function needs tweeked to work

var SimpleSymbols = function(str){
    var re = /\+\w\+/i;
    var test = true;
    if (str.search(re) === -1){
        test = false;
    }
    return test;
};

z = "+d+++====+==+D+==";
alert(SimpleSymbols(z));

//This function returns if any +"letter"+ is true. I need it to return if any letter is not surrounded by +

// var firstNonRepeatedCharacter = function(x){
//     var stringArray = x.split('');
//     for(var i = 0; i < stringArray.length; i++){
//         var repeatedIndices = [];
//         var nonRepeatedIndices = [];
//         var idx = stringArray.indexOf(i);
//         while (
//     

var prime = function (num) {
    debugger;
    var result = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0 && i !== num) {
            result = false;
        }
        return result;
    }
};
alert(prime(6));
//Tweak to allow for 1 to be entered, otherwise it returns undefined

var ABCheck = function(str){
    
}


//Fibonacci number finder

var fibonacciFinder = function(num){
    var fibArray = [0,1];
    var result = true;
    for(var i = 0; i < 99; i++){
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    };
    if(fibArray.indexOf(num) === -1){
        result = false;
    };
    return result;
}
console.log(fibonacciFinder(6765));

// Slightly more concise code for same result:
var fibonacciFinder = function(num){
    var fibArray = [0,1];
    for(var i = 0; i < 99; i++){
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    };
    return fibArray.indexOf(num) !== -1;
}
console.log(fibonacciFinder(6765));