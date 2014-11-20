var array = []
var newArr = function(){
	for(var i = 0; i < 1000; i++){
		randomNum = Math.floor(Math.random() * 1000);
		array.push(randomNum);
	};
	return array;
};
newArr();
var selectionSort = function(arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			if(arr[j] > arr[i]) {
				swap(arr, i, j);
			};
		};
	};
	return arr;
};
var swap = function(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}
	console.time('time');
for(var i = 0; i < 1000; i++){
	selectionSort(array);
};
	console.timeEnd('time');