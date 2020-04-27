// 创建
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return this.name + 'run';
    }
}

var somePerson = new Person('shaosuo');
somePerson.run();

// 继承
class Child extends Person {
    constructor(name: string) {
        super(name)
    }
    study(): string {
        return this.name + 'study';
    }
}

var child = new Child('shaosuo');
child.study();


// 静态属性和方法
// 创建
class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    static type = 'animal';
    static active() {
        // 不能调用非静态属性和方法
        return this.type + 'active';
    }
    run(): string {
        return this.name + 'run';
    }
}

console.log(Person2.active());

// 多态，继承

// 抽象类
// 不能被实例，含有抽象方法，子类不含抽象方法的可以被实例。子类必须要实现抽象方法
abstract class Animal {
    run(): string {
        return 'run';
    }
    abstract eat(): string;
}

class Cat extends Animal {
    eat(): string {
        return 'eat fish';
    }
}
var cat = new Cat();
cat.eat();

