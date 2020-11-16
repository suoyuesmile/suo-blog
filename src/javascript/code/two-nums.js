function twoNums(nums, target) {
    const set = new Set(nums);
    for (const num of nums) {
        const pattern = target - num;
        if (set.has(pattern)) {
            return [num, pattern]
        }
    }
}

console.log(twoNums([1, 3, 5, 7, 9, 10], 19));

