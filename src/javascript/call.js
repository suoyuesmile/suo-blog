var origin = {
    c: 1000,
    a() {
        console.log(this.c)
    }
}
var c = 2;
// console.log(origin.a());

function d(a, b) {
    console.log(a, b, this, this.c);
}

Function.prototype.fakeCall = function(context, ...nums) {
    if (typeof this !== 'function') {
        throw new Error();
    }

    if (context == null) {
            globalThis.fn = this;
            return globalThis.fn(...nums);
    }
    if (typeof context !== 'object') {
            context = new Object(context);
    }
    context.fn = this;
    const result = context.fn(...nums);
    delete context.fn;
    return result;
}

Function.prototype.fakeApply = function (context, nums) {
    if (typeof this !== 'function') {
        throw new Error();
    }

    if (context == null) {
        globalThis.fn = this;
        return globalThis.fn(...nums);
    }

    if (typeof context !== 'object') {
        context = new Object(context);
    }

    context.fn = this;

    if (!Array.isArray(nums)) {
        if (typeof nums === 'object' && nums !== null && nums.length) {
            // 
        } else {
            throw new Error();
        }
    }

    const result = context.fn(args);
    delete context.fn;
    return result;
}

// Function.prototype.fakeBind = function(context, nums) {
//     if (typeof this !== 'function') {
//         throw new Error();
//     }
//     context.fn = this
//     return context.fn(...nums);
// }

// d();
// d.fakeCall(origin, 1, 2);
// d.call(null, 1, 2);

// d.fakeCall(null, 2, 2);
d.fakeApply(origin, { 0: 2, 1: 2, length: 2 });
// d.apply(origin, { 0: 2, 1: 2, length: 2 });

// d.fakeBind(origin, [1, 2]();



