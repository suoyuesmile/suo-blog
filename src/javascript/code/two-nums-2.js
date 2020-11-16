function twoNums(nums, target) {
    const map = new Map();
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < length; i++) {
        let pattern = target - nums[i];
        const patternkey = map.get(pattern);
        if (patternkey && i !== patternkey) {
            return [i, patternkey];
        }
        
    }

    throw new Error('没有找到');
}

console.log(twoNums([1, 5, 3, 7], 10));