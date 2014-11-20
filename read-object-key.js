var len = 1000;
var obj = {};
var newObj = function(){
	for(var i = 0; i = len; i++){
		obj[i] = i;
	};
	return obj;
};
newObj();
var returnProperty = function (obj, key) {
	return obj[key];
};
console.time('time');
for(var i = 0; i < 1000; i++){
	var randomNum = Math.floor(Math.random() * len);
	returnProperty(obj, randomNum);
}
console.timeEnd('time');