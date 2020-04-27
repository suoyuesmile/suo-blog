"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 范型函数
function getData1(val) {
    return val;
}
function getData2(val) {
    return val;
}
function getData(val) {
    return val;
}
getData(123);
// 范型类
var PersonAny = /** @class */ (function () {
    function PersonAny(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonAny.prototype.run = function (val) {
        return val;
    };
    ;
    return PersonAny;
}());
PersonAny = __decorate([], PersonAny);
var somePerson1 = new PersonAny('shao', '12');
var PersonClassAny = /** @class */ (function () {
    function PersonClassAny(name) {
        this.name = name;
    }
    PersonClassAny.prototype.run = function (val) {
        return val + '...';
    };
    return PersonClassAny;
}());
var somePerson2 = new PersonClassAny('shaosuo');
