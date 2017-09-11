//1. 选择一个元素作为基准pivot
//2. 所有小于基准元素移动至左边,所有大于基准的元素移动至右边
//3. 对基准左边右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止

var quickSort = function(arr){
	if(arr.length <= 1){
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
};
