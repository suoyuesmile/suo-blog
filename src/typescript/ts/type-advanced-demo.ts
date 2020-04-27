// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for(let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for(let id in second) {
        if (!(<any>result).hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class PersonIntersect {
    constructor(public name: string) {}
}
interface Loggable {
    log(): void;
}
class ConsoleLoggable implements Loggable {
    log() {
        console.log('log');
    }
}

var shao = extend(new PersonIntersect('name'), new ConsoleLoggable());

// 联合类型
// 类型守卫
// 类型别名