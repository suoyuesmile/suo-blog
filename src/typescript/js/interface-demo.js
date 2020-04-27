"use strict";
var somePersonInfo = {
    name: 'shao',
    age: 12,
    gender: 'man'
};
function ajax(config) {
    var xhr = new XMLHttpRequest;
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
}
var run = function (key, value) { return ''; };
var users = [];
var users2 = {};
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        this.name = '';
    }
    PersonClass.prototype.run = function () {
        return 'run';
    };
    return PersonClass;
}());
var ChildClass = /** @class */ (function () {
    function ChildClass(name) {
        this.name = name;
    }
    ChildClass.prototype.run = function () {
        return 'run';
    };
    ChildClass.prototype.cry = function () {
        return 'wawwaaw';
    };
    return ChildClass;
}());
