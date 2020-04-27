"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 创建
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + 'run';
    };
    return Person;
}());
var somePerson = new Person('shaosuo');
somePerson.run();
// 继承
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.study = function () {
        return this.name + 'study';
    };
    return Child;
}(Person));
var child = new Child('shaosuo');
child.study();
// 静态属性和方法
// 创建
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.active = function () {
        // 不能调用非静态属性和方法
        return this.type + 'active';
    };
    Person2.prototype.run = function () {
        return this.name + 'run';
    };
    Person2.type = 'animal';
    Person2 = __decorate([], Person2);
    return Person2;
}());
console.log(Person2.active());
// 多态，继承
// 抽象类
// 不能被实例，含有抽象方法，子类不含抽象方法的可以被实例。子类必须要实现抽象方法
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        return 'run';
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        return 'eat fish';
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.eat();
