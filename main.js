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

var fibonacciFinder2 = function(num){
    var fibArray = [0,1];
    for(var i = 0; i < num - 2; i++){
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    };
    return fibArray[num - 1];
}
console.log(fibonacciFinder2(4));


//This didn't work.
var evenOccurence = function(arr){
    debugger;
    var even = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i]);
        }
    }
    var occurence = [];
    for(var i = 0; i < even.length; i++){
        for(var j = 0; j < even.length; j++){
            if(even.indexOf(even[i]) === even.indexOf(even[j]))
                occurence.push(even[i]);
        }
    }
    for(var i = 0; i < occurence.length; i++){
        if(occurence[i] === occurence[i + 1] !== occurence[i + 2]){
            return occurence[i];
        } else {
            return null;
        }
    }
};
                

console.log(evenOccurence([1,6,2,4,4,5,6,8,9,6]));

var parenBit = function (str) {
    var firstParen = str.indexOf('(');
    var secondParen = str.indexOf(')');
    if (firstParen === -1) {
        return "No opening parenthesis";
    } else if (secondParen === -1) {
        return "No closing parenthesis";
    } else {
        return str.slice(firstParen, secondParen + 1);
    }
};

alert(parenBit("xyz(abc)123"));

var flatten = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.isArray(arr[i]) === false) {
            newArr.push(arr[i]);
        } else {
            flatten(arr[i]);
        }
    }
    return newArr;
};

console.log(flatten([1, 2, [3, [4], 5, 6], 7]);

var flatten = function (arr) {
    var newArr = [];
    if (arr.isArray(arr[0]) === false) {
        newArr.push(arr[0]);
        arr.splice(0,1);
        flatten(arr[0]);
    } else if (arr.isArray(arr[0]) === true) {
        flatten(arr[0]);
    }/* else if (arr.isArry(arr[0]) === null) {
        break;
    }*/
    return newArr;
};

console.log(flatten([1, 2, [3, [4], 5, 6], 7]));

var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];
    
//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

//code here

var totalTaxa = function(arr){
    var total = {};
    for(var i = 0; i < arr.length; i++){
        for(var prop in arr[i]){
            if(!total[prop]){
                total[prop] = {};
            }
            else if(!total[prop][arr[i][prop]]){
                total[prop][arr[i][prop]] = 1;
            }
            else {
                total[prop][arr[i][prop]]++;
            }
        }       
    }
    return total;
};

console.log(totalTaxa(animals));


//Given the array, create a function that determines whether the array contains two numbers whose sume is equal to 0;

var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];

var sumZero = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(arr[i] + ' and ' + arr[j]);
                return true;
            }
            else {
                return false;
            }
        }
    }
};

console.log(sumZero(numbers));

var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];

var sumZero = function (arr) {
    var response = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(arr[i], arr[j]);
                response = true;
            }
        }
    }
    return response;
};

console.log(sumZero(numbers));


var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];

var sumZero = function (arr) {
    var response = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            for (var k = i + j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(arr[i], arr[j], arr[k]);
                    response = true;
                }
            }
        }
    }
    return response;
};

console.log(sumZero(numbers));

//given the following array, randomize it.
var students = ["PJ", "Brock", "Erin", "Daniel", "Jacob", "Aaron", "Jason", "Schuyler", "Kory", "Corey", "Zac", "Jonathan", "Skyler", "Jess", "Krissy", "Mark", "David", "Bryson", "Larry", "Fernanda", "Jennifer"];

var randomizeStudents = function(arr){
    var randomArray = [];
    while(arr.length > 0) {
        var i = Math.floor(Math.random()*arr.length);
        randomArray.push(arr.splice(i, 1));
    }
    return randomArray;
}

var randomStudents = function(arr){
    var randomArray = [];
    for(var i = randomNum; i < arr.length; i++){
        var randomNum = Math.floor(Math.random()*arr.length);
        randomArray.push(arr.splice(i, 1));
    }
}

//write a function that takes a string as an argument and determines whether or not the given string is a palindrome.
//example of a palindrome: Acrobats stab orca

var isPalindrome = function(str){
    if(str.split('').reverse().join('').toLowerCase().replace(/\W+/g, '') === str.toLowerCase().replace(/\W/g, '')){
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("Anna"));
console.log(isPalindrome("Hello World"));
console.log(isPalindrome("Amen icy cinema"));


//create a function that takes an array of objects as an argument and a string that represents
// a property of an object contained in the array and returns an object whose keys are the
// properties and whose values are arrays of objects that match that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];
    
var objectifier = function(arr, str) {
    debugger;
    for(var i = 0; i < arr.length; i++){
        for(key in arr[i]){
            if(arr[i].key === str){
                var newObj = {};
                newObj.str = [newObj.str.push(arr[i])]
                return newObj;
            }
        }
    }
}

console.log(objectifier(arr, 'team'));
    
//should return:
{ 
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}

var objectifier = function(arr, str) {
    var result = {}
    for(var i = 0; i < arr.length; i++){
        if(result[arr[i][str]]){
            result[arr[i][str]].push(arr[i]);
        }
        else {
            result[arr[i][str]] = [arr[i]];
        }
    }
    return result;
}

// Review bracket notation versus dot notation

// I completed this function incorrectly
var recursion = function(callBack){
  var newFunction = function(callBack, n){
    newFunction();
    for(var i = 0; i <= n; i++){
      callBack();
    }
  }
  return newFunction;
}

var newFn = originalFunction(function(){
  alert('Woooo');
}, 3);

var originalFunction = function(fn, n){
  return function(){
    if(n > 0){
      fn();
      n--;
    } else {
      console.log('Done');      
    }
  }
}

var longest = function(str){
  var arr = str.toLowerCase().split(' ');
  var longestArray = [arr[0]];
  for(var i = 1; i < arr.length; i++){
    if(arr[i].length > arr[i - 1].length && arr[i] !== arr[i - 1]){
      longestArray.splice(longestArray.length - 1, 1, arr[i]);
    } else if(arr[i].length === arr[i - 1].length && arr[i] !== arr[i - 1]) {
      longestArray.push(arr[i]);
    }
  }
  if(longestArray[longestArray.length - 1].length > longestArray[0].length){
    longestArray.splice(0,1);
  }
  if(longestArray.length === 1) {
    return longestArray[0];
  } else {
    return longestArray;
  }
}

console.log(longest("You are just an old antidisestablishmentarian"));
console.log(longest("I gave a present to my parents"));
console.log(longest("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"));
console.log(longest("I gave a present to my present"));

// Why doesn't this one work?
var replace = function(str){
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "x"){
      arr.splice(arr[i], 1, "y");
    }
  }
  return arr.join('');
}
console.log(replace('xxxaaalyllx'));
// This one works
var replace = function(str){
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "x"){
      arr[i] = "y";
    }
  }
  return arr.join('');
}
console.log(replace('xxxaaalyllx'));


//create a function that takes an array of strings as an argument and returns an
 // object that contains the strings converted to base 64 as keys and the length 
 // of the original strings as values. Each string should only be encoded once!

var strings = ["Like a Rolling Stone", "Satisfaction", "Imagine", "What's Going On", "Respect", "Good Vibrations", "Johnny B. Goode", "Hey Jude", "Smells Like Teen Spirit", "What'd I Say", "Satisfaction", "Imagine", "Imagine", "Good Vibrations", "Hey Jude"];

//code here
var output = function(arr){
  var encodeObj = {};
  for(var i = 0; i < arr.length; i++){
    var encoded_string = btoa(arr[i]);
    if(!encodeObj[encoded_string]){
      encodeObj[encoded_string] = arr[i].length;
    }
  }
  return encodeObj;
}

//should output
//{"TGlrZSBhIFJvbGxpbmcgU3RvbmU=":20 ... }


// This toy problem stumped me, but it works. I need to review closures.
var sum = function(x, y){
  if(!y){
    return function(z){
      return x + z;
    }
  } else {
    return x + y;
  }
}
sum(2,3)
sum(2)(3)

var christmasTree = function(n){
    if(n < 1){
        return 0;
    }
    return n + christmasTree(n - 1)
}
christmasTree(5)

var triangle = function(num){
    var total = 0;
    for(var i = 1; i <=num; i++){
        total += i
    }
    return total;
}

/*
Write a function that takes in a string and can evaulate each
type of brackets to determine if there are matching pairs.
Return true if all opening brackets have a closing or return false if they do not.
*/

    // var openingRegEx = /[[({]/g;
    // var closingRegEx = /[)})]]/g;

var evaluateBrackets = function(str){
    var curlyOpen = [];
    var parenOpen = [];
    var straightOpen = [];
    var curlyClose = [];
    var parenClose = [];
    var straightClose = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === '{'){
            curlyOpen.push(str[i]);
        } else if(str[i] === '('){
            parenOpen.push(str[i]);
        } else if(str[i] === '['){
            straightOpen.push(str[i])
        } else if(str[i] === '}'){
            curlyClose.push(str[i]);
        } else if(str[i] === ')'){
            parenClose.push(str[i]);
        } else if(str[i] === ']'){
            straightClose.push(str[i]);
        }
    }
    if(curlyOpen.length === curlyClose.length && parenOpen.length === parenClose.length && straightOpen.length === straightClose.length){
        return true;
    } else return false;
}
var strPass = '({}[]{[]})';
var strFail = '({{{]}})';
evaluateBrackets(strPass);
evaluateBrackets(strFail);

var evaluateBracketsDos = function(str){
    debugger;
    var openingRegEx = /[{*[*(*]/g;
    var closingRegEx = /[^{*[*(*]/g;
    var openingArray = str.match(openingRegEx);
    var closingArray = str.match(closingRegEx);
    if(openingArray.length === closingArray.length){
        return true;
    }
    else return false
}
var strPass = '({}[]{[]})';
var strFail = '({{{]}})';
evaluateBracketsDos(strFail);

var evaluateBracketsTres = function(str){
    debugger;
    var openingRegEx = /[{*[*(*]/g;
    var closingRegEx = /[^{*[*(*]/g;
    var openingArray = openingRegEx.exec(str);
    var closingArray = closingRegEx.exec(str);
    if(openingArray.length === closingArray.length){
        return true;
    }
    else return false
}
var strPass = '({}[]{[]})';
var strFail = '({{{]}})';
evaluateBracketsTres(strFail);

var clockAngle = function(time){
    var timeArray = time.split(":");
    var minuteAngle = timeArray[1] * 6;
    var totalAngle;
    if(timeArray[0] === "12"){
        hourAngle = 0 + ((timeArray[1]/60) * 30);
    } else {
        hourAngle = (timeArray[0] * 30) + ((timeArray[1]/60) * 30);
    }
    if(minuteAngle > hourAngle){
        totalAngle = minuteAngle - hourAngle;
    } else {
        totalAngle = hourAngle - minuteAngle;
    }
    if(totalAngle === 360){
        return 0;
    } else {
    return totalAngle;
    }
}
console.log(clockAngle("12:30"))
// each minute is 6 degrees.

var minusTen = function(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] - 10;
    }
};
var evens = function(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    func(newArr);
    return newArr;
}
var arr = [52,67,45,36,29,87,65,47,28,44,78];
evens(arr, minusTen);