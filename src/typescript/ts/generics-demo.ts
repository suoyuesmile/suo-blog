// 范型函数
function getData1(val: string): string {
    return val;
}

function getData2(val: number): number {
    return val;
}

function getData<T>(val: T): T {
    return val;
}
getData<number>(123);

// 范型类
class PersonAny<T> {
    constructor(name: T, age: T) {
        this.name = name;
        this.age = age;
    }
    name: T;
    age: T;
    run(val: T): T {
        return val;
    };
}
var somePerson1 = new PersonAny<string>('shao', '12');

// 范型接口

// 属性范型接口
interface PersonInfoAny {
    <T>(name:T):T;
    age: string;
}

interface PersonInfoAny2<T> {
    (name: T): T;
    age: string;
}

// 类范型接口
interface PersonInterfaceAny<T> {
    name: T;
    run(val: T): T;
}

class PersonClassAny implements PersonInterfaceAny<string> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(val: string) {
        return val + '...';
    }
}

var somePerson2 = new PersonClassAny('shaosuo');