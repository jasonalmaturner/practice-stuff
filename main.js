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