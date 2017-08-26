# 内存管理
### 存储类别
- 对象（object）：被存储的值占有一定的物理内存
> 此对象非面向对象中的对象
- 访问（access）：声明变量来访问对象，也可以通过其他方式指定对象
```
int entity = 3;      //声明变量访问
int * pt = &entity;   //指针访问
int rank[10];        //数组访问
```
- 作用域（scope）：
- - 块作用域：使用的局部变量（包含形参）都有块作用域 ，C99扩展了声明
- - 函数作用域：仅用于goto，延伸整个函数
- - 函数原型作用域：从形参定义到原型结束，形参名并不重要，仅变长数组需要
- - 文件作用域：定义在函数外面，从该定义至文件末尾均可见（全局变量）
```
double blocky(double a){ 
    double b; 
    for(int c=0; c<10; c++){ ... }
} //a, b, c 都具备块作用域

```
- 链接（linkage）：
- - 外部链接：全局作用域，在多个文件中使用的且具有文件作用域
- - 内部链接：文件作用域，在一个文件使用且具有文件作用域
- - 无链接：局部作用域，具有块，函数，原型作用域
```
static:
    int giants = 5;         //文件作用，外部
    static int dodgers = 3; //文件作用，内部
```
- 存储期（storage duration）：对象在内存中保留的时间
- - 静态存储期：执行期间一直存在，文件作用域变量具有静态存储期
- - 线程存储期：用于并发设计，从申明至线程结束
- - 自动存储期：块作用域变量通常具备自动存储期
- - 动态分配存储期：
- 存储类别：5种

存储类别 | 存储期 | 作用域 | 链接 | 声明
---|---|---|---|---
自动 | 自动 | 块 | 无 | 块内
寄存器 | 自动 | 块 | 无 | 块内 使用register
静态外部链接 | 静态 | 文件 | 外部 | 函数外
静态内部链接 | 静态 | 文件 | 内部 | 函数外 使用static
静态无链接 | 静态 | 文件 | 无 | 块内 使用static
- 自动变量：
- - 使用auto显示声明（不同于c++中auto）
- - 内层变量于外层同名：暂时隐藏外层变量，等运行完后回到原来作用域、

```
#include <stdio.h>
int main(void){
	int i = 3;
	for (int i = 0; i < 10; ++i)
		printf("%d ", i);
	printf("file:%d\n", i);
	return 0;
}
// 0 1 2 3 4 5 6 7 8 9 file:3
```
- - 初始化：自动变量不会初始化除非显示初始化，未初始化会造成不可预期的异常
- 寄存器变量：存储在cpu中，处理速度更快的自动变量
- 静态内部链接变量：只能用于同一文件的函数中

```
static int a = 0;
int main(){}
```

- 静态外部链接变量：外部变量（external variable）
- - 使用其他文件的变量必须再次声明，函数内则可以不必声明
```
int a;                //定义外部变量，给全局
extern char coal;     //声明使用其他文件外部变量
int main(){
    extern char coal; //再次声明变量，可以省略
    char coal;        //定义的自动变量，隐藏了外部变量
}
```
- - 初始化：可以显示初始化，也可以自动初始化为0，只能用常量表达式初始化
- - 使用：函数内使用时，可以声明加extern,也可以不申明
- - 定义和申明：**extern表明声明的变量定义在别处**

```
int tern = 1;       //定义并初始化
extern int tern;    //此文件声明，也可以不申明
extern int a;       //必须有其他文件定义过a
extern int b = 0;   //错误,extern只能申明不能初始化
```
存储类别说明符：auto, register,static,extern,_ Thread_local,typedef
存储类别与函数：外部函数（默认）， 静态函数， 内联函数（C99）

```
double a();           //外部函数，其他文件可以使用
static double beta(); //静态函数，此文件使用
extern double c();    //内联函数，其他文件定义的函数
```
> 存储类别：按需使用

### 随机数函数和静态变量

```
#include <stdio.h>
static unsigned long int next = 1; //种子
unsigned int rand0(void){
	next = next * 1103515245 + 12345;
	return (unsigned int) (next / 65536) % 32768;
}
void changeNext(unsigned int seed){
	next = seed;
}

```
### 掷色子

```
#include <stdio.h>
#include <stdlib.h>		
int roll_count = 0;
int roll_n_dice(int, int);
int rollem(int);
// int main(void){
// 	for (int i = 0; i < 10; ++i)
// 	{
// 		printf("%d\n", rollem(6));
// 	}
// 	return 0;
// }
//生成1 - 6 之间的随机数
int rollem(int sides){
	int roll;
	roll = rand() % sides + 1;
	roll_count++;
	return roll;
} 
int roll_n_dice(int dice, int sides){
	int d;
	int total =  0;
	if(sides < 2)
		return -2;
	if(sides < 1)
		return -1;
	for (d = 0; d < dice; ++d)
		total += rollem(sides);
	return total;
} 
```

```
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "testRandom.c"
int main(void){
	int dice, roll;
	int sides, status;
	srand((unsigned int) time(0));
	printf("enter a number of sides:\n");
	while(scanf("%d", &sides) == 1 && sides > 0){ 
		printf("how many dice\n");
		//检查输入部分
		if(status = scanf("%d", &dice) != 1){ 
			if(status == EOF)            //检查是否有文件终止符
				break;
			else{
				while(getchar() != '\n')  //去掉换行符
					continue;
				continue;
			}
		}
		//开始计算骰子总和
		roll = roll_n_dice(dice, sides);
		//打印结果
		printf("total %d , using %d times, %d-sides\n", roll, dice, sides);
	}
	printf("function called : %d\n", roll_count);
	return 0;
}
```

### 分配内存
- malloc与free函数：可以申请所需内存

```
#include <stdlib.h>   //使用时声明
double *p;
p = (double *) malloc(30 * sizeof(double)); //申请内存块给指针
// p为内存的首地址，可以作为数组名使用，比变长数组更灵活
free(p); //回收内存，配套使用，如果不使用会造成内存泄露，即耗尽
//malloc 可能分配不到内存，放回空指针
if( p == NULL )
    exit(EXIT_FALLURE);
```
- calloc与free函数：和malloc略有区别

```
double * p;
p = (double *) calloc(30 , sizeof(double)); //把块所有位置设置为0
free(p);
```
- 存储类别和动态内存分配：自动对象，静态对象，动态对象存储在不同区域

### 类型限定符
- 恒常性：const关键字申明的对象不能，赋值，递增或者递减来修改
- - 指针和形参中申明const

```
const float * p; //指向float类型的const值
float const * p; //同上
float * const p; //常量指针，不能指向其他值
const float * const p; //前面2个的结合
int sum(const int * p, const int p[]) //两个形参意义相同，表示数组数据不能更改
```
> const 放在*左边表示指针指的对象是const，放在*右边表示指针是const

- - 对全局使用const：避免数据被更改，2种策略

```
// 外部变量，给其他地方声明
const int a = 1;    //file1.c
extern const int a; //file2.c
// 使用头文件
static const int a = 1; //file.h
#include "file.h"       //file.c
```

- 易变形：volatile 涉及编译器（寄存器）的优化，const和volitile同时使用时顺序不重要
- 新增：restrict（c99表明指针是唯一访问，并初始的方式）, _Atomic（c11并发程序中要用到的）
- 新位置：c99加入

```
int sum( int * const a, int * restrict b); //旧式
int sum( int a[const], int b[restrict]);   //新式    
```
- 小训练：动态分配字符（待调bug）

```
#include <stdio.h>
#include <stdlib.h>
#define SIZE 20
int get_n(){
	int words;
	if(scanf("%d", &words) == 1 && words > 0)
		return words;
	else
		printf("enter error!!!\n");
}
void show(char * a[], int n){
	int i = 0;
	while( i++ < n ){
		puts(a[i-1]);
	}
}
int main(void){
	int words, i = 0, j = 0;
	char ch;
	printf("how many words do you wish to enter:");
	words = get_n();   				 //处理输入的单词数
	// char * q [5] = (char (*) [5])malloc( SIZE * 5 * sizeof(char) ); 
	//动态创建
	printf("enter %d words:", words);
	while( (ch = getchar()) != '\n' ){
		if(ch == ' ')
		{
			char * p = (char *)malloc( i * sizeof(char) );
			q[j] = p;
			free( p );
			j++;
			i = 0;
			continue;
		}
		i++;
	}
	show(q, words);
	free( q );
	return 0;
}
```