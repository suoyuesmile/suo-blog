function mergeTwoArray(l1, l2) {
    const len1 = l1.length, len2 = l2.length;
    const newArr = [];
    let i = 0, j = 0;
    

    while(i < len1 || j < len2) {
        if (l1[i] < l2[j]) {
            newArr.push(l1[i]);
            i++
        } else {
            newArr.push(l2[j]);
            j++
        }
    }

    return newArr;
}

console.log(mergeTwoArray([1, 3, 8], [2, 4, 9]));

// [1, 3, 8]
// [2, 4, 9]
// 