const arr = [ 1, 3, 5, 7, 9];
const arr2 = [1, [2, 3], [4, 5, 6, 7, [8, 9]]];


const result1 = arr.reduce((prev, current) => prev + current);

// 递归
function flat(array) {
    return array.reduce((prev, current) => prev.concat(Array.isArray(current) ? flat(current) : current), []);
}

console.log(flat(arr2));

console.log(result1);


