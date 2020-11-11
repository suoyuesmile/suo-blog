var origin = {
    a: 2
}


origin = {
    get b() {
        return 2;
    },

    get c() {
        return this._a_;
    },

    set c(val) {
        this._a_ = 2 * val;
    }
}

const b = origin.b;
origin.c = 4;
const c = origin.c;

console.log(b, c);
