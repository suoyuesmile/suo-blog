"use strict";
function add(num1, num2) {
    return num1 + num2;
}
var mob = function (num1, num2) {
    return num1 - num2;
};
// 可选参数必须在最后
var personInfo = function (name, age) {
    if (!age) {
        return name;
    }
    return name + age;
};
// 默认参数
var personInfo2 = function (name, age) {
    if (name === void 0) { name = 'shaosuo'; }
    if (!age) {
        return name;
    }
    return name + age;
};
// 剩余参数
var personInfo3 = function (name, age) {
    if (name === void 0) { name = 'shaosuo'; }
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    if (!age) {
        return name;
    }
    return name + age;
};
// 函数重载 同名不同参数类型
// 箭头函数与es6一样
