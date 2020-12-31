// 计算函数运行时间
function speed(n, callback) {
    const start = new Date().getTime();
    console.log(callback(n));
    const time = new Date().getTime() - start;
    return time;
}

// 例子1: n！ 
function recursion(n) {
    if (n === 1) {
        return 1;
    }
    return n * recursion(n - 1);
}

// f(n) = n * f(n - 1) 数列，递推公式

console.log(recursion(10));


// 例子2: 斐波拉契数列
// 1 1 2 3 5 8 n (fn = f(n-1) + fn(n -2))
function feibulaqi(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return feibulaqi(n - 1) + feibulaqi(n - 2);
}

console.log(feibulaqi(10));

// 例子3: 小青蛙跳台阶
// 一次可跳一台阶、可跳二台阶，跳n台阶多少总跳法
// 1 2 3 5 8
// 第一次跳1， 剩下f(n-1)没有跳
// 第一次跳2， 剩下f(n-2)没有跳
// 总共有 f(n-1) + f(n-2) 种
function jumpStep(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return jumpStep(n - 1) + jumpStep(n - 2);
}

console.log(jumpStep(10));

// 例子4: 反转链表
// 1 -> 2 -> 3 -> 4
// 4 -> 3 -> 2 -> 1
function Node() {
    this.data = '';
    this.next = null;
}
// todo


// 递归优化
// 子问题的重复计算 --- 保存计算的结果
const tmpArr = [];
function recursionReduce(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    if (tmpArr[n]) {
       return tmpArr[n]; 
    } else {
        tmpArr[n] = recursionReduce(n - 1) + recursionReduce(n - 2);
        return tmpArr[n]
    }
}

// 自底而上， 采用递推: 最优
function febulaqi2(n) {
    let f1 = 1;
    let f2 = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        f2 = f1;
        f1 = sum;
        sum = f1 + f2;
    }
    return sum;
}


console.log(`优化前:${speed(40, feibulaqi)}ms`);
console.log(`优化后:${speed(40, recursionReduce)}ms`); // 速度快，消耗内存大
console.log(`递推后:${speed(40, febulaqi2)}ms`);








