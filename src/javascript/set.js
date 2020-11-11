const s1 = new Set([1, 3, 2, 3]);
console.log(s1);
// console.log([...new Set([1, 3, 2, 3])]); // 取唯一

// 判断是否存在某个值
// console.log(s1.has(2));


// 判断交集
function intersection(s1, s2) {
    // 短的取比长的
    if (s1.size > s2.size) {
        return intersection(s2, s1);
    }
    const intersectionSet = new Set();
    for (const num of s1) {
        if (s2.has(num)) {
            intersectionSet.add(num)
        }
    }
    return [...intersectionSet];
}

console.log(intersection(new Set([1, 3, 5, 7, 9]), new Set([2, 4, 6, 7])));
