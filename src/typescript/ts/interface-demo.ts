// 属性接口
interface PersonInfo {
    name: string;
    age: number;
    gender: string;
    school?: string;
}

var somePersonInfo:PersonInfo  = {
    name: 'shao',
    age: 12,
    gender: 'man'
}

// 属性接口封装ajax
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}
function ajax(config: Config) {
    var xhr = new XMLHttpRequest;
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
}


// 函数接口
interface kv {
    (key: string, value: any): string;
}

var run:kv = (key: string, value: any) => { return ''}

// 可索引接口
interface UserArr {
    [index: number]: string;
}
interface UserObj {
    [index: string]: string;
}
var users: UserArr = [];
var users2: UserObj = {};

// 类接口
interface PersonInterface {
    name: string;
    run(): string;
}

class PersonClass implements PersonInterface {
    name: string;
    constructor() {
        this.name = ''
    }
    run() {
        return 'run';
    }
}

// 接口继承
interface ChildInterface extends PersonInterface {
    cry(): string;
}

class ChildClass implements ChildInterface {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run() {
        return 'run';
    }
    cry() {
        return 'wawwaaw'
    }
}