var array = []
var newArr = function(){
	for(var i = 0; i < 100000; i++){
		randomNum = Math.floor(Math.random() * 1000);
		array.push(randomNum);
	};
	return array;
};
newArr();
var bucketSort = function(arr){
	var tempArr = [];
	var newArr = [];
	for(var i = 0; i < 1001; i++){
		tempArr[i] = 0;
	};
	for(var i = 0; i < arr.length; i++){
		tempArr[arr[i]]++;
	};
	for(var i = 0; i < tempArr.length; i++){
		if(tempArr[i] > 0){
			for(var j = 0; j < tempArr[i]; j++){
				newArr.push(i);
			};
		};
	};
	return newArr;
}
	console.time('time');
for(var i = 0; i < 1000; i++){
	bucketSort(array);
}
	console.timeEnd('time');