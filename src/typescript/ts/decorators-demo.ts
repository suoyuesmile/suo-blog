// 装饰器函数
function Age(v: number) {
    return function<T extends {new(...args: any[]): {}}> (constructor: T): T {
        class PersonAge extends constructor {
            age: number = v
        }
        return PersonAge;
    }
}

@Age(1)
class CatCat {
    name = 'cat';
}

var catcat = new CatCat();
console.log(catcat);