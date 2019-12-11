// //1. 变量的作用域
var n=999;
function fn(){
	alert(n);
}
fn(); //999

function fm(){
	var n=999;
}
alert(n); //error

function fk(){
	n=999;
}
fk();
alert(n); //999
//2. 从外部读取局部变量
function fa(){
	var n=999;
	function fb(){
		alert(n);
	}
	return fb;
}
var result=fa();
result();

//3. 闭包概念
// fb就是闭包，能够读取其他函数内部变量的函数。
// 闭包是将函数内部和函数外部连接起来的一座桥梁

//4. 闭包的用途
// 用途1. 读取函数内部变量
// 用途2. 使变量保持在内存中
fuction fc(){
	var n=99;
	nAdd=function(){n+=1}
	function fd(){
		alert(n);
	}
	return fd;
}
var result=fc();
result();
nAdd();
result();
// fc是fd的父函数，fd被赋予了一个全局变量，导致fd始终在内存中

//5. 运行机制
var name = "The Window";
var object = {
	name : "My Object",
	getNameFunc : function(){
		return function(){
			return this.name;
		};
	}
};
alert(object.getNameFunc()());

var name = "The Window";
var object = {
	name : "My Object",
	getNameFunc : function(){
		var that = this;
		return function(){
			return that.name;
		};
	}
};
alert(object.getNameFunc()());

