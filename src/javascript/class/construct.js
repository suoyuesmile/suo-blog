function FakeClass(val) {
    this.property = val;
    this.someFunction = function() {
        console.log(1);
    }
}
FakeClass.prototype.a = 2;

FakeClass.prototype.b = function() {
    console.log(2)
}

const obj = new FakeClass(2);

console.log(FakeClass);