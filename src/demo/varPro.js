
// var v = "hello world";
// alert(v); //hello world


// var v = 'hello world';
// (function(){
// 	alert(v);
// })(); //hello world

// var v = 'hello world';
// (function(){
// 	alert(v);
// 	var v = 'think';
// })() //undefine

/***********
函数内
var v;
alert(v);
v = 'think';
*/
// function myTest(){
// 	foo();
// 	function foo(){
// 		alert("hello world");
// 	}
// }
// myTest(); //hello world
function myTest(){
	foo();
	var foo = function foo(){
		alert("hello world");
	}
}