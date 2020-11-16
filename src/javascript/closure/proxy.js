function dos() {
    var pipe = function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        console.log(1);
                        return fn(val);
                    }, value);
                }
                // console.log(global.double);
                funcStack.push(global[fnName]);
                return oproxy;
            }
        });
    
        return oproxy;
    }
    
    global.double = n => n * 2;
    global.pow = n => n * n;
    global.reverseInt = n => n.toString().split("").reverse().join("") | 0;
    
    // pipe(3).double.pow.reverseInt.get; // 63
    
    console.log(pipe(3).double.pow.reverseInt.get);
}

dos();
console.log(1, 2);
