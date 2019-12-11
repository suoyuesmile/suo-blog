# 数组
### 一维数组
- 声明：和声明变量一样，但是数组不能直接赋值给它，可以初始化
```
int a[10];
```
- 初始化：声明并初始化并非赋值，不允许先声明后直接赋值

```
int a[10] = {1，2，3，4，5，6，6，7，7，8}; //可读可写
const int b[10] = = {1，2，3，4，5，6，6，7，7，8};//只读数组
```
- 未完全初始化：**不初始化，数组里面同变量一样全是垃圾值，如果部分初始化，其余值为0**
- 指定初始化器：C99增加的特性，可以指定某个位置的值

```
int a[10] = {1, 2, 3, [4] = 10, 5, 6, [9] = 20};
// 1, 2, 3, 0, 0, 10, 5, 6, 0, 20
//直接到指定的值给其赋值，中间未赋值的设置为0
```
- 赋值：通过循环依次给数组赋值，**不允许作为单元给数组赋值**

```
for(i=0; i<SIZE; i++)
    a[i] = i;
```
- 边界：使用时要防止下标越界，gcc编译器允许编译，但是越界的值是垃圾值
> 编译器是相信程序员的，程序员最好声明数组时，用符号常量来表示数组大小
- 变长数组（VLA）：c90不允许，c99允许，c11可选（不是必备）

```
int a = 5;
int a[a];   //a为变量，非常量
```
### 多维数组
- 申明：第一个是行，第二个是列

```
int a[3][4];
```
- 初始化：2种方式

```
int a[3][4] = {1,2,3,4,5,6,7,8,9,10,11,12};
int a[3][4] = {
                {1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12}
            };
    // 3行4列
```
- 赋值：使用双重循环进行赋值

```
for(a = 0; a < ROWS; a++)
    for( b = 0 ; b < COLS; b++)
        arr[a][b] = a + b;
```
### 指针和数组
- 指针与数组的联系：数组名是数组首元素的地址,首地址加1是下一个元素的地址

```
int a[3];    // a == &a[0];   
```

```
#include <stdio.h>
#define SIZE 10
int main(){
	short a[SIZE] = {1,2,3,4,5,6,7,8,9,10};
	double b[SIZE] = {1,2,3,4,5,6,7,8,9,10};
	short i, *pa = a;
	double *pb = b;
	for (i = 0; i < 2; ++i)
	{
		printf("pa%d point %p\n", i, pa++);
	}	
	for (i = 0; i < 2; ++i)
	{
		printf("pb%d point %p\n", i, pb++);
	}
}
// pa0 point 0060FF00
// pa1 point 0060FF02

// pb0 point 0060FEB0
// pb1 point 0060FEB8

```
> 系统中，地址是按字节编址，而在c语言中指针加1是指增加一个存储单元，而不是固定的字节

```
a[SIZE]; // a+5 == &a[0+5]  *(a+5) == a[5]
*a+1  ==> (*a)+1 ==> a[0]+1
*(a+1) ==> a[1]
```
### 数组的传递
- 函数原型与定义（数组）：**通过传指针的方式，传数组**
    
```
int sum(int *， int);   //通过指针传递（数组首地址）
int sum(int [], int);   //等效1，提醒读者是数组
int sum(int * a, int n){}
int sum(int a[], int n){}
```
- 调用数组：**传递数组首地址**

```
sum(a, SIZE);   //a为数组名， SZIE为数组大小  
```
- 指针形参：传2个指针表示数组的开始和结束


```
int sum(int * start, int * end){
    int sum = 0;
    while(start < end){
        sum += *start;
        start++;
    }
    return sum;
}
```

**是否可以 sum += *start++ ? 答案是可以的**

```
#include <stdio.h>
#define SIZE 4
int sum(int * start, int * end){
    int sum = 0;
    while(start < end){
        sum += *start++;
        //分析 * ++（后缀） 同优先级右结合
        //步骤分解 1. start先使用用 sum = sum + *start;
        //		  2. start = start + 1;
    }
    return sum;
}
int main(void){
	int a[SIZE] = {1, 2 , 3, 4};
	printf("%d", sum(a, a+SIZE));
	return 0;
}
// 10  正确
```
** 另外两种形式又怎样呢？ **

```
#include <stdio.h>
int a[2] = {1, 2};
int main(){
	int *p1, *p2, *p3;
	p1 = p2 = p3 = a;
	printf("%d,%d,%d\n", *p1, *p1++, *p1); 
	//分析: 函数中参数的传递的顺序是从右往左传递
	//     1.*p1 = 1  ==> no3 = 1
	//     2.*p1++ ==> *p1 = 1 , p1 += 1 ==> no2 = 1
	//     3.*p1 ==> a[1] ==> no3 = 2
	printf("%d,%d,%d\n", *p2, (*p2)++, *p2);
	//     1.*p2 = 1  ==> no3 = 1
	//     2.(*p2)++ ==> *p2 = a[0], no2 = 1, a[0] = 2    
	//     3.*p2 = a[0] = 2 ==> no1 = 2;
	printf("%d,%d,%d\n", *p3, *++p3, *p3);
	//     1.*p3 = a[0]  ==> no3 = 2
	//     2.*++p3 ==> p3= p3+1 = &a[1] =>   no2 = *&a[1] = 2
	//     3.*p3 = a[1] = 2 ==> no1 = 2
	return 0;
}
// 2 1 1
// 2 1 1
// 2 2 2
```
> 函数中参数的传递的顺序是从右往左传递

### 指针操作
- 赋值
- 解引用
- 取地址
- 与整数相加
- 递增
- 与整数相减
- 递减
- 求差
- 比较

### 保护数组数据
- 原因：通过地址传的数组都是原始数据，可以改变
但有些时候不需要改变数组的原始数据
- 对形参使用const:不需要改变数组内容时，最好加上const

```
int sum(coust int *, int);    //不能完全保护
int sum(const int [], int);   //完全保护
```
- const其他内容：const比#define更加灵活，不应该把const数组作实参传递

```
const double PI = 3.14;       //PI值不能被改变
const int a[SIZE] = {1,3,4};  //数组值不能被改变
const int *p = a;             //将int类型声明为const，不能用p来改变a的值
//可以用数组改变其值，p也可以指向其他变量
int * const p = a;            //常量指针不能指向其他地方
//可以修改指向的值
const int * const p = a;      //不能指向其他地方，也不能通过p来改变变量的值 
```
### 指针和多维数组
- 首地址之间的关系：a == a[0] == &a[0][0] 值虽然相同，但代表的含义不同

```
int a[3][4] = {
                {1,2,3,4}
                {5,6,7,8}
                {7,8,9,1}
            };
// a == &a[0][0];     二维数组的首地址
// a[0] == &a[0][0];   作为第一个数组名a[0]的首地址也为二维数组的首地址
// 即有 a == a[0]  值虽然相同，但代表的含义不同

```
- 解引用：
```
a           &a[0][0]    二维数组首地址 
a+2         &a[2]       二维数组第3个元素地址
*(a+2)      &a[2][0]    二维数组第3个元素的首地址
*(a+2)+1    &a[2][1]    二维数组第3个元素的第二个元素的地址
*(*(a+2)+1) a[2][1]     二维数组第3个元素的第二个元素的值 

```
- 地址步长：a + 1 跨一个数组元素， *a + 1 跨一个数元素
```

```
- 指向多维数组的指针：[]优先级高于*,所以一定要加（）

```
int (*p) [2];  //声明含有两个int的数组
int a[2][3];
p = a;         //指向二维数组a
int * p[2];    //声明一个含有两个指针的数组
```
- 指针兼容性：指针之间类型没有隐式转化，类型不匹配会编译出错
- 多维数组与函数：形参3种写法,指针式无法省略参数会引发歧义

```
int sum(int (*p)[COLS], int ROWS);  //指针式
int sum(int a[][COLS], int ROWS);   //数组式
int sum(int [][COLS], int ROWS);    //数组略参式
```
- 变长数组：变长数组并不能改变大小，只是在初始化的时候可以用变量来初始化大小

```
int sum(int a[rows][cols], int rows, int cols); //无效顺序
int sum(int rows, int cols, int a[rows][cols]); //有效
int sum(int, int, int a[*][*]); //省略形参名

const int SIZE = 80;
int sum[SIZE]; c11允许 ,c90好像不允许
```
- 复合字面量：C99加入的 { 2，3，4，5，9 } 

```
int a[2] = {10 ,20}; //初始化数组
(int [2]) {10, 20};  //初始化匿名数组，必须在创建的同时使用它
(int []) {10, 20};   //省略大小，编译器自动计算
int *p = (int []) {10, 20}; //首地址给指针p
sum( (int []){10, 20}, SIZE );  //用作实参
```
- 小训练：一维数组3种拷贝函数

```
#include <stdio.h>
#define N 5
void cp_arr(double [], const double [], int);
void cp_ptr(double [], const double *, int);
void cp_ptrs(double *, const double *, const double *);
void show_arr(double [], int);
int main(void){
	double source[N] = {1, 2, 3, 4, 5};
	double target1[N], target2[N], target3[N];
	cp_arr(target1, source, N);
	cp_ptr(target2, source, N);
	cp_ptrs(target3, source, source+N);
	show_arr(target1, N);
	putchar('\n');
	show_arr(target2, N);
	putchar('\n');
	show_arr(target3, N);
	putchar('\n');
	return 0;
}
void cp_arr(double target[], const double source[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		target[i] = source[i];
	}
}
void cp_ptr(double target[], const double *source, int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		target[i] = *(source+i);
	}
}
void cp_ptrs(double target[], const double *source_start, const double *source_end){
	while(source_start < source_end){
		*target = *source_start++;
		target++;
	}
}
void show_arr(double a[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		printf("%.2lf ", a[i]);
	}
}
```
- 小训练：二维数组处理函数

```
#include <stdio.h>
#define ROWS 3 //行数
#define COLS 5 //列数
void getArr(double [][COLS] ,int);
void averageGroup(double [], const double [][COLS], int);
double average(const double [][COLS], int);
double max(double [][COLS], int);
void swap(double *, double *);
void show(double [], int, double, double);

int main(void){
	double arr[ROWS][COLS] = {0};
	double aveGroup[ROWS] = {0}; //注意初始化
	double ave = 0;
	double m = 0;
	getArr(arr, ROWS);
	averageGroup(aveGroup, arr, ROWS);
	ave = average(arr, ROWS);
	m = max(arr, ROWS);
	show(aveGroup, ROWS, ave, m);
	return 0;
}
//给二维数组赋值
void getArr(double a[][COLS], int rows){
	int i, j;
	for (i = 0; i < rows; ++i)
		for (j = 0; j < COLS; ++j)
			scanf("%lf", &a[i][j]);
}
//求每行数据的平均值
void averageGroup(double b[], const double a[][COLS], int rows){
	int i, j;
	double sum = 0;
	for (i = 0; i < rows; ++i){
		for (j = 0; j < COLS; ++j)
			sum += a[i][j]; 
		b[i] = sum/rows;
	}
}
//求所有数据的平均值
double average(const double a[][COLS], int rows){
	int i, j;
	double sum = 0;
	for (i = 0; i < rows; ++i)
		for (j = 0; j < COLS; ++j)
			sum += a[i][j]; 
	return sum/(COLS*rows);
}
//求二维数组的最大值
double max(double a[][COLS], int rows){
	int i, j;
	for (i = 0; i < rows; ++i)
	{
		for (j = 0; j < COLS; ++j)
			if(a[i][j] > a[i][j+1])
				swap(&a[i][j], &a[i][j+1]);
		if(a[i][j] > a[i+1][j])
			swap(&a[i][j], &a[i+1][j]);
	}
	return a[i][j];

}
//打印结果
void show(double a[], int size, double av, double m){
	int i;
	for(i = 0; i < size; i++){
		printf("%.2lf ", a[i]);
	}
	printf("\naverage = %.2lf\n", av);
	printf("max = %.2lf\n", m);
}
//交换两个变量值
void swap(double *p, double *q){
	double temp = *p;
	*p = *q;
	*q = temp;
}
```