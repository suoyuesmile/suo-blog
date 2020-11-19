// Input: 121
// OutPut ture

// Input: -121
// OutPut false

// Input: 100
// OutPut false

// 1 2 1

function solve(x) {
    let tmp = x;
    const stack = [];

    if (x < 0) {
        return false;
    }

    while(tmp) {
        stack.push(tmp % 10);
        tmp = Math.floor(tmp / 10);
    }

    tmp = x;
    while (tmp) {
        if (stack.pop() !== Math.floor(tmp % 10)) {
            return false;
        }
        tmp = Math.floor(tmp / 10)
    }
    return true;
}

console.log(solve(101));
