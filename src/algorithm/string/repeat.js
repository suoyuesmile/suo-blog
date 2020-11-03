function repeat(o, n) {
    if (n == 1)
        return o
    let half = Math.ceil(n / 2);
    return repeat(o, half) + repeat(o, n - half)
}

console.log(repeat('abc', 5));

// 输出连续n个字符串
