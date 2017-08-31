function test() {
	this.x = 1;
}
//this指的是调用函数的那个对象

//用法1：纯粹的函数调用
function test(){
	this.x = 1;
	alert(this.x);
}
test(); //1

var x = 1;
function test() {
alert(this.x);
}
test(); //1

var x = 1;
function test(){
	this.x = 0;
}
test();
alert(x); 

//2. 作为对象方法的调用
function test(){
	alert(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m(); //1

//3. 作为构造函数的调用
function test(){
	this.x = 1;
}
var o = new test();
alert(o.x); //1
var x = 2;
function test(){
	this.x = 1;
}
var o = new test();
alert(x); //2

//4. apply调用
var x = 0;
function test(){
	alert(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m.apply(); //0
o.m.apply(o); //1

