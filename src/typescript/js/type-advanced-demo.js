"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var PersonIntersect = /** @class */ (function () {
    function PersonIntersect(name) {
        this.name = name;
    }
    return PersonIntersect;
}());
PersonIntersect = __decorate([], PersonIntersect);
var ConsoleLoggable = /** @class */ (function () {
    function ConsoleLoggable() {
    }
    ConsoleLoggable.prototype.log = function () {
        console.log('log');
    };
    return ConsoleLoggable;
}());
var shao = extend(new PersonIntersect('name'), new ConsoleLoggable());
// 联合类型
// 类型守卫
// 类型别名
