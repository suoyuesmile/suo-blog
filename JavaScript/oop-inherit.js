function Animal(){
	this.species = "动物";
}

function Cat(name, color){
	this.name = name;
	this.color = color;
}

// //1. 构造函数绑定
// function Cat(name, color) {
// 	Animal.apply(this, arguments);
// 	this.name = name;
// 	this.color = color;
// }
// var cat1 = new Cat("大毛","黄色");
// alert(cat1.species); 

//2. prototype模式
Cat.prototype = new Animal();
//删除Cat的prototype对象，赋予一个新值
Cat.prototype.constructor = Cat;
//手动纠正继承链
vat cat1 = new Cat("大毛","黄色");
alert(cat1.species);

//3. 直接继承prototype 
function Animal(){ }
Animal.prorotype.species = "动物";
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species);
//实际把Animal的原型构造也改变了
alert(Animal.prototype.constructor);

//4. 利用空对象为中介
// var F = function(){};
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// cat.prototype.constructor = Cat;
// alert(Animal.prototype.constructor);
//封装成函数
function extend(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
	//实现继承的完备性
}
extend(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species);

//5. 拷贝继承
function Animal(){}
Animal.prototype.speices = "动物";
function extend2(Child,Parent){
	var p = Parent.prototype;
	var c = Child.prototype;
	for (var i in p) {
		c[i] = p[i];
	}
	c.uber = p;
}
//将父亲对象的原先属性全部拷贝给子