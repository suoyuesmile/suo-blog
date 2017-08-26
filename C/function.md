# 函数
### 复习函数
- 什么是函数：完成特定任务的独立程序代码单元
- 函数的作用：省去重复多于代码，提高代码可读性，方便修改
- 函数的构成：
- - 函数原型：声明函数，告诉编译器函数的类型
- - 函数调用：使用函数
- - 函数定义：实现函数

```
int fun(char s); //申明函数

fun('a'); //调用函数

int fun(char s){
    return s;
}        //实现函数
```
- 函数形参：局部变量，内部私有，每个变量要求声明类型

```
void show(int, int);   //也是合法的
```
- 函数实参：实参是具体的值, 会赋值给形参
- 返回值：测试函数的程序称为驱动程序，return语句会终止函数并把控制交给主调函数
- 无参数：注意加void

```
void show(void);
```
### 递归
- 定义：C允许函数调用自己，这种调用称为递归
- 演示：

```
#include <stdio.h>
int up_and_down(int);
int main(void){
	up_and_down(1);
	return 0;
}
int up_and_down(int n){
	printf("%d, %p\n", n, &n);
	if(n < 4)
		up_and_down(n+1);
	printf("%d, %p\n", n, &n);
}
// 1, 0060FF20
// 2, 0060FF00
// 3, 0060FEE0
// 4, 0060FEC0
// 4, 0060FEC0
// 3, 0060FEE0
// 2, 0060FF00
// 1, 0060FF20
```
- 原理：
- - 每次调用都有自己的变量，变量都是n但值不同
- - 每次调用完之后都会返回一次，逐级返回
- - 调用之前的顺序执行，调用之后的倒序返回
- - 没有拷贝函数代码，可以代替循环，可以被i循环代替
- - 必须包含让递归停止的语句
- 尾递归：递归调用置于函数的末尾，相当于循环，能使用选择循环，莫使用递归（速度，内存优势）
- 递归和倒序计算
- 整数化二进制
- 
```
void to_binary(int n){
	int r;
	r = n % 2;
	if( n >= 2 )
		to_binary( n/2 );
	printf("%d", r==0 ? 0 : 1);
}
```
- 递归优缺点：**为很多程序提供了简单的解决方案，但效率和消耗不令人满意**

### 多文件编译
- 预处理和申明函数放在头文件中
- 使用命令编译(linux)

```
gcc file1.c file2.c   //一起编译
gcc file1.c file2.o   
```

### 指针
- 本质：值为内存地址的变量
- 作用：存储变量的地址
- 取地址符&：得到变量的地址 &a 表示a的地址
- 解引用符*：找到存储在地址中的值 *&a ==> a
- 用%p打印地址
- 声明与赋值：严格区分开

```
int * pi;     //声明int型指针
pi = &a;      //给指针赋值
int *pi = &a; //上面两步合并成一步
b = *pi;      //获取pi所指向地址中存储变量的值并赋值给b
```
- 使用指针在函数间通信：函数传值无法真正的改变实参的值，传地址可以改变实参的值。
- 交换两个整数值：

```
#include <stdio.h>
void swap(int *, int *);
int main(void){
	int a = 1, b =2;
	swap(&a, &b);
	printf("%d, %d\n", a, b);
	return 0;
}
void swap(int *p, int *q){
	int temp;
	temp = *p;
	*p = *q;
	*q = temp;
}
```
- 小训练1：10进制转任何进制

```
void to_base_n(int x, int n){
	int r;
	r = x%n;
	if(x >=  n)
		to_base_n(x/n, n);
	printf("%d", r );
}
```
- 小训练2：Fibonacci递归与非递归

```
#include <stdio.h>
int fibonacciRec(int); //递归
int fibonacci(int);    //非递归
int main(void){
	int n;
	scanf("%d", &n);
	printf("%d\n", fibonacciRec(n) );
	printf("%d\n", fibonacci(n) );
	return 0;
}
int fibonacciRec(int n){
	if(n == 1 || n == 2)
		return 1;
	else
		return fibonacciRec(n-1) + fibonacciRec(n-2);
}
int fibonacci(int n){
	int i, fib1 = 1, fib2 = 1;
	if( n == 1 || n == 2)
		return 1;
	for(i = 3 ; i <= n; i++){
		fib2 = fib1 + fib2;
		fib1 = fib2 - fib1; 
	}
	return fib2;
}
```