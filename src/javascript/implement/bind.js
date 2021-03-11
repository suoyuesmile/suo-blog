Function.prototype.mockBind = function() {
    // 使用apply 实现
    that = this;
    var thatArgs = Array.prototype.slice.call(arguments, 1);
    var arg = arguments[0];
    var bound = function() {
        var args = thatArgs.concat(Array.prototype.slice.call(arguments));
        return that.apply(this instanceof bound ? this : arg, args);
    }
    var TmpProto = function() {}
    if (that.prototype) {
        TmpProto.prototype = that.prototype;
    }
    bound.prototype = new TmpProto();
    return bound;
}

var obj = {
    a: 'a',
}

function test(b) {
    this.c = 'c';
    console.log(this.a, b);
}

test.mockBind(obj, 'b')();

// var Fn = test.mockBind(obj, 'b');
// var objFn = new Fn('a');
// console.log(objFn.c);

// todo: 理解new的过程
