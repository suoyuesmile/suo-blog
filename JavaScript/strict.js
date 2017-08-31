//ECMAscript5添加的严格模式

//1. 目的，消除语法不合理，减少怪异行为
//消除不安全之处
//提供编译器效率
//新版本JS做铺垫

//2. 进入标志
"use strict";
//3. 调用
//脚本文件第一行
//函数体第一行
//执行匿名函数中
(function(){
	"use strict";
})();

//4. 语法改变
//a. 全局变量必须显示声明
v = 1; //错误
for(i = 0; i < 2; i++){}//错误
//b. 静态绑定
//只运行静态绑定
var v = 1;
with(o) {v =2}; //错误

var x = 2;
console.info(eval("var x = 5; x"));//5
console.info(x); //2
//c.增强的安全措施
//禁止this关键词指向全局变量
function f(){
	return !this;
}//false
function f(){
	"use strict";
	return !this;
}//true
function f(){
	"use strict";
	this.a = 1;
}
f()//报错
//禁止函数内部调用栈
function f1(){
	"use strict";
	f1.caller; //error
	f1.arguments;//error
}
f1();
//禁止删除变量
"use strict";
var x;
delete x;
var o = Object.create(null, {'x'：{
	value: 1,
	configurable: true
}});
delete o.x;
//显示报错
"use strict";
var o = {};
Object.defineProperty(o, "v", { value:1, writable:false});
o.v = 2;
//重名错误
//对象不允许重名，函数不允许有重名参数
"use strict";
var o = {
	p:1,
	p:2
};//error
//禁止8进制
"use strict";
var n = 0110; //语法错误
//agguments对象限制

//函数声明放顶层
//新增保留字
//implements, interface,let.private,..
