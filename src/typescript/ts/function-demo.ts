function add(num1: number, num2: number): number {
    return num1 + num2;
}

var mob = (num1: number, num2: number): number => {
    return num1 - num2;
}

// 可选参数必须在最后
var personInfo = (name: string, age?: number) => {
    if (!age) {
        return name;
    }
    return name + age;
}

// 默认参数
var personInfo2 = (name: string = 'shaosuo', age?: number) => {
    if (!age) {
        return name;
    }
    return name + age;
}

// 剩余参数
var personInfo3 = (name: string = 'shaosuo', age: number, ...result: any[]) => {
    if (!age) {
        return name;
    }
    return name + age;
}

// 函数重载 同名不同参数类型
// 箭头函数与es6一样