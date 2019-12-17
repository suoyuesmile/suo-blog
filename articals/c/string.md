# 字符串
### 表示字符串和字符串IO
    
```c
#define MSG = "hello world!";
char a[MAX] = "hello world!";
char * p = "hello world!";
puts(MSG);
puts(a);
puts(p);
```
### 定义字符串
- 字符串字面量：双引号括起来的内容，编译器会自动加入\n，双引号之间紧邻或者空格看作相连的

```c
char * a = "hello " "world!";  //  hello world!
```
函数中使用字符串，只存储一次，被视为指向该字符串位置的指针

```c
printf("%s, %p, %c\n", "hello", "world", *"ok"); // hello,0X000000999,o
```
- 字符串数组：和字符数组区别，两种初始化方式

```c
char a[40] = "sadasfsdfgsdgfdgfdhfdh";    //简易初始化
char a[40] = {'a','b','c'...'g', '\n'}    //标准初始化
char a[] = "dsfsdfsdfdsfsdfsdf";          //编译器自动计算长度
const char * a = "sdsafsdfsdfsdfsfdf";          //同上
//定长初始化中未被初始化的部分填充'\0'
```
- 数组形式与指针形式区别
- - 数组形式的a == &a[0] 只能作为常量，不能进行a++等操作，指针形式a 是可以进行a ++的
- - 指针对数据类型匹配很高，指向常量的指针需要被声明为常量const char * p = "abc";
- - 意味着不能用p改变数据的值，但可以改变p的位置
- - 初始化数组把静态存储区的字符串拷贝给数组，初始化指针只是把字符串的地址给指针
- 字符串与数组

```c
//相当于字符的二维数组
char f[3][4] = {{"ab"},{"cd"},{"e"}};  // ab\0, cd\0, e\0\0
//相当于3个字符串指针
const char * p[3] = {{"ab"},{"cd"},{"e"}}; // ab\0, cd\0, e\0 自动获取大小
```
- 字符串与指针：指针拷贝也只拷贝地址，没有拷贝整个字符串

### 字符串输入
- 分配空间：用显示声明来输入，否则会丢失数据

```c
char *name; scanf("%s", name);   //不好
char name[SIZE]; scanf("%s", name); //可以的
```
- gets()函数：已废弃，并不知道字符串有多长，输入字符过长导致缓冲区溢出，可能导致其他数据被擦除

```c
#include <stdio.h>
int main(void){
	char name[10];
	gets(name);
	puts(name);
	return 0;
}
//gcc 编译没报任何消息
//fgdfgdfgdfgfdgfdg
//fgdfgdfgdfgfdgfdg 
```
> 实际情况：大多数编译器仍支持

- fgets()函数：可以替代gets(),可扩展，可以从文件输入，保留换行符，需要手动设置为空字符
- - 读一行：读到换行或者读到n个字符，最终打印的n-1个字符
```c
#include <stdio.h>
int main(void){
	char a[10];
	fgets(a, 7, stdin);  //读了dsfdsf个字符+'\0'
	fputs(a, stdout);    //输出dsfdsf\0 没有+'\n' 
	return 0;
}
//dsfdsfsdgfdgdffdg   
//dsfdsf 
```
- - 连续读取，fgets可以存储换行符，读完一段，继续读剩下的，可以直接读到文件尾部
```c
#include <stdio.h>
#define N 10
int main(void){
	char word[N];
	while( fgets(word, N, stdin) != NULL && word[0] != '\n' ){
		fputs(word, stdout);
	}
	return 0;
}
```
- - 每行只读一定数量的字符，并丢弃了换行符

```c
#include <stdio.h>
#define N 10
int main(){
	char word[N];
	int i;
	while( fgets(word, N, stdin) != NULL && word[0] != '\n'){
		i = 0;
		while(word[i] != '\n' && word[i] != '\0')
			i++;             //不是换行符或者空字符跳过
		if(word[i] == '\n')
			word[i] = '\0'; //遇到换行符，转空字符
		else
			while(getchar() != '\n') //读到空字符，丢弃剩余
				continue;
		fputs(word, stdout);
	}
	return 0;
}
```


> 空字符于空指针：空字符('\0')与空指针(NULL)都可以用0表示，但空字符是字符型(1字节)，空指针是指针型(4字节)

- gets_s()函数：c11新增，可扩展，只从标准输入中输入，丢弃换行符，输入太长时更安全
- s_gets()函数：fgets()变体，遇到换行符设为空，遇到空丢弃其余字符
- scanf()函数：可指定宽度，但遇空格即终止，只能用于输入单词

### 字符串输出
- puts()函数：使用字符串地址作参数，自动添加换行符
- fputs()函数：用于文件输出，不添加换行符，遇fgets()配对使用
- printf()函数：不自动加换行符，打印多个字符更简单

### 自定义输入输出

### 字符串函数

(类型)函数名 | 参数 | 作用
---|---|---
int    strlen | char * | 统计字符串长度
char * strcat | char *, char * | 把第二个字符串拼接在第一个上
char * strncat | char *, char *, int | 把第二个字符串指定长度添加到第一个字符串上
int    strcmp  | char *, char * | 比较两个字符串，相同返回0，二大于1返回正，否则返回负
int    strncmp | char *, char *, int | 限定比较的字符串长度
char * strcpy | char *, char * | 把第二个拷贝到第一个
char * strcpy | char *, char * int | 限制拷贝的字符串长度
void  sprintf | char *, 格式化, name | 将printf的内容存储在一个字符串中

### 字符串排序
- 示例

```c
#include <stdio.h>
#include <string.h>
#define SIZE 81  //字符串长度
#define LIM 20   //最大行数
#define HALT ""  //读到空字符结束
void strSort(char * str [], int num); //排序函数
char * strGets(char * , int );    //输入字符串函数

int main(void){
	char in[LIM][SIZE];
	char * pstr[LIM];
	int ct = 0, k = 0; //输入输出计数
	while(ct < LIM && strGets(in[ct], SIZE) != NULL && in[ct][0] != '\0'){
		pstr[ct] = in[ct];
		ct++;          //输入字符串
	}
	strSort(pstr, ct); //排序字符串
	for(k = 0; k < ct; k++)
		puts(pstr[k]); //输出字符串
	return 0;
}
//选择排序
void strSort(char * str [], int num){
	char *temp;
	int top, seek;
	for (top = 0; top < num-1; ++top)
	{
		for (seek = top + 1; seek < num; ++seek)
		{
			if( strcmp(str[top], str[seek]) > 0 )
				temp = str[top];
				str[top] = str[seek];
				str[seek] = temp; 
		}
	}
}
//自定义输入函数
char * strGets(char * str, int n){
	char * ret_val;
	int i = 0;
	ret_val = fgets(str, n, stdin);
	if(ret_val){
		while(str[i] != '\n' && str[i] != '\0')
			i++;
		if(str[i] == '\n')
			str[i] = '\0';
		else
			while(getchar() != '\n')
				continue;
	}
	return ret_val;
}
```

- 排序单位是指针：排序的是指针而不是字符串本身
- 选择排序算法

```c
//伪代码
for n = 首元素 to n=倒数第2个元素
    找出剩余元素中的最大元素，并将其放在第n个元素
//C代码
for(top = 0; top < n - 1; top++)
    for(seek = top + 1; seek < n; seek++)
        if(a[top] > a[seek])
            swap(&a[top], &a[seek]);
```


### 命令行参数：int argc, char *argv[] 

```c
int main(int argc, char *argv[])
{
    argc // 命令行字符串数量
    argv // 字符串数组指针 argv[n] 表示第n个字符串的地址
}
```

```c
#include <stdio.h>
int main(int argc, char * argv[]){
	int i = argc;
	printf("%d\n", argc);
	while( i-- >  1 )  
		puts(argv[i]);
}
// --i情况  (没想到argc = 4)  (- -)
// test86 see you later  0 1 2 3 
// 1) (i = 4- 1 = 3, i > 0) -> a[3]
// 2) (i = 3- 1 = 2, i > 0) -> a[2]
// i--情况
// 1) (i = 4 > 0, i = 3 - 1 = 2) -> a[3]
// 2) (i = 3 > 0, i = 2 - 1 = 2) -> a[2]
// 3) (i = 2 > 0, i = 1 - 1 = 1) -> a[1]
```

### 字符串转数字

- 小训练：逆转字符串

```c
void reStr(char * a, int n){
	int i = 0;
	char b[n];
	while(i++ < n)
		b[i] = a[i-1];
	i = 0;
	while(n-- >= 0){
		a[i] = b[n];
		i++;
	}
}
```
- 小训练：命令行输出

```c
#include <stdio.h>
#include <ctype.h>
#define N 10
void pf(char * , int);
void toUpper(char * , int);
void toLower(char * , int);
int main(int argc, char * argv[]){
	char a[N];
	switch (argv[1][1]){
		case 'p': pf(a, N); break;
		case 'u': toUpper(a, N); break;		
		case 'l': toLower(a, N); break;
		default : puts("enter error!"); break;
	}
	return 0;
}
//原样输出
void pf(char * a, int n){
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		fputs(a, stdout);
	}
	
}
//输出大写
void toLower(char * a, int n){
	int i;
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		i = 0;
		while(i++ < n-1){     // i=0<9 i=1 a[0], i=1<9 i=2 a[1] ---> i=8<9 i=9 a[8]
			if(isupper(a[i-1]))
				a[i-1] = tolower(a[i-1]);
		}
		fputs(a, stdout);
	}
}
//输出小写
void toUpper(char * a, int n){
	int i;
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		i = 0;
		while(i++ < n-1){
			if(islower(a[i-1]))
				a[i-1] = toupper(a[i-1]);
		}
		fputs(a, stdout);
	}
}
```