# C与数据
### 11种数据类型
- 整型类：int，short（短整型），long（长整型），unsigned（无符号），char（字符整型）
- 浮点类：float（单精度），double（双精度）
- C90新增：signed（有符号），void（空）
- C99新增：*_Boo*l（布尔指）*，_Complex*（复数），*_Imaginary*（虚数）

### 存储单元
- 位：最小的存储单元，存储0或1
- 字节：常用存储单位，几乎所有机器有1字节等于8位，即1字节可以表示0-255之间的整数
- 字：自然存储单位：8位的微型计算机一字为8位，16，32位的为即一字为16位或32位

### 基本整型类型
1. int型：储存要占1个机器字长，16位机器，范围-32768 ~ 32767目前大多数机器32位，即占4个字节，存储数字范围为：-2147483648 ~ 2147483647
2. short型：存储小于等于int，-32768 ~ 32767
3. long型：储存大于等于int，-2147483648 ~ 2147483647
4. long long型：存储至少64位，即8个字节
5. unsigned型：无符号，只能存储正整数，能存储比signed更大的整数
6. 目前普遍设置：long long 64位8字节，long 32位4字节，short 16位2字节，int 16/32位 2/4字节
7. 常量：超出int范围，视为long，超出long范围，视为unsigned long，继续long long, unsigned long long
8. 用H/h作为short，用L/l作为long， 用LL/ll作为long long，用U/u作为unsigned，例如343H，3234L，35455LL，435345U，534546467ULL
9. char型：一个字节，-128 ~ 127，ASCII编码0~127,存储绰绰有余，C语言将字符常量视为int型非char型，是否有符号看编译器
10. 整型可以表示10，8，16进制，如32，032，0x32/0X32

### 基本浮点类型
- float：至少6位有效数字，取值至少10的-37到+37次方。通常浮点占32位，8位指数的值和符号，剩下的24位非指数的值和符号。
 浮点最大：999999961690316250000000000000000000.000000
超过：*1.#INF00*
- double，至少13位有效数字。通常64位，剩下的32位给非指数部分。
- long double 更高的精确要求，至少比double精确

### 复数和虚数类型
- 复数：float_Complex，double_Complex,long double_Complex
- 虚数：float_Imaginary，double_Imaginary，long double_Imaginary

### 类型大小
sizeof()函数
sizeof(int),sizeof(char)等等……

### 问题
整型，浮点的上溢出，下溢出？

# 字符串与格式化输出输入
### 字符串 string
1. 字符串数组（变量）来存储，char name[40];
2. 输入scanf("%s",name) name是数组首地址
3. 输出printf("%s",name)
4. 数组大小sizeof(name) => 40，可以写成 sizeof name
5. 字符串长度 strlen(name) =>字符实际长度
6. 空字符结尾（\n）

### 预处理 define
- 格式 #define NAME 'shaosuo'
- 注意是简单的替换，没有其他操作

### 限定符 const
- 明示常量：limits.h float.h
- imits/h:包含*INT_MAX*， *INT_MIN* 等预处理常量数值h
- float.h:包含*FLT_MAX*， *FLT_MIN*..

### 输出函数 printf()

#### 转换格式
- %a/A  浮点，16进制，p计数
- %g/G  自动选择%f，%e
- %i    有符号10进制整数
- %u    无符号10进制整数
- %%    打印百分号
- %p    指针
- %o    无符号8进制
- %x    无符号16进制

#### 转换修饰符
- 标记：-（左对齐），+（添加符号），空格（空格覆盖正号），#（防止0被删除），0（0填充符号位）
- 宽度：数字（最小字段宽度）（用于字段对齐，右对齐）
- 精度：.数字
- 类型：h（short），hh（char），j，l，ll，L（long  double），t，z

#### 返回值

```
#include <stdio.h>
int main(){
	int a = 0, b =0;
	int pn1 = printf("ok!\n");            // pn1 = 4
	int pn2 = printf("ok!,%d,%d\n",a, b); // pn2 = 8
	int sn1 = scanf("%d", &a, &b);        // sn1 = 1
	int sn2 = scanf("%d%d", &a, &b);      // sn2 = 2
	printf("pn1=%d, sn1=%d, pn2=%d, sn2=%d\n", pn1, sn1, pn2, sn2);
	return 0;
}
```

- printf（）返回正确按照格式变量个数，即打印字符的数
- scanf（）返回正确按照指定格式接收的变量个数  
# 运算符表达式和语句

### 基本运算符
- 算数：（），+（取正），-（取负），+，-，*，/，%（取模），=（赋值）
- sizeof：如果对象是类型，必须加括号，是变量可以不加，返回字节大小
- %取模运算符：如13%5=3，只能用于整数，不能用于浮点数
- 递增（减）运算符++（--）：前缀与后缀区别，**i++ => 先使用 i，再递增，++ i  => 先递增 i，再使用**

### 类型自动转换
- 普遍：**较小类型转换为较大类型**
- 运算时：两个值被分别两种；类型的更高级别
- 高低：long double，double，float，unsigned long long，long long，unsigned long， long，unsigned int，int（int和long大小可能相同
）
- 参数传递时，char，short转换成int，float转化成double
- **赋值语句可能导致类型的升级和降级**

### 类型强制转化
- 格式：（double）a = （double）1 + (double) 1;
- 显示使用类型转化比较好，避免不必要的错误
# 控制语句

### 循环
- 关系运算符，表达式：<，<=，==，>=，>，!=
- 真假：**非0 即为真**
- 注意：**= 赋值，== 比较**
- 优先级关系：x > y + 2 => x = ( y + 2 )
- while语句：非计数循环

```
#include <stdio.h>
int main(){
	char a[27] = "abcdefghijklmnopqrstuvwxyz";
	int i = 0;
	while( i++ < 26){
		printf("%c\n", a[i-1]); //前面+1 ，-1即为真实元素
	}
	return 0;
}
```

- for语句：计数循环
- 逗号运算符：结果为右边的值
- 入口，出口条件：while，do while
- 嵌套循环

```
#include <stdio.h>
int main(){
	char lets[27] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	int i, j;
	for (i = 0; i < 6; i++)
	{
		for (j = 0; j <= i; j++)
		{
			printf("%c", lets[i*(i+1)/2+j]);
		}
		printf("\n");
	}
	return 0;
}
```
- 示例：倒序打印（test47.c）

```
#include <stdio.h>
#include <string.h>
#define MAX_LEN 255
int main(){
	char a[MAX_LEN];
	scanf("%s", a);
	int len = strlen(a);
	while(len-- > 0){
		printf("%c", a[len]);
	}
	return 0;
}
```

- 示例：冒泡排序（test43.c）

```
void bb(int a[]){
int  i, j;
for (i = 0; i < LEN -1; ++i)
	{
		for (j = 0; j < LEN - i - 1; ++j)
		{
			if(a[j] < a[j+1])
			{
				swap(&a[j], &a[j+1]);
			}
		}
	}
}
```

### 分支与跳转
- 选择语句 if……：**执行或者跳过这条语句**
- 双选语句 if ……else：**在两条语句中进行选择**

```
if(n == 0)
    s = 1;
else
    s = -1;
```

- 字符输入输出函数：getchar(),putchar(),它们是#include中的**预处理，不是真正的函数**
```
ch = getchar();   //scanf("%c", &ch);
putchar(ch);    //printf("%c", ch);
```

- ctype.h系列的字符函数：**使用时别忘记头文件**

函数名 | 作用
---|---
isalnum（） | 字母或数组
isalpha（） | 字母
isblank（） | 空白符
isdigit（） | 数字
islower（） | 小写字母
isupper（） | 大写字母
isxdigit（）| 16进制字母
tolower（） | 返回小写字母
toupper（） | 返回大写字母
- 多重选择if …… （else if） …… else：在多条语句中选择，**完全等价与if else多重嵌套模式**

```
if (score <= 60)
    score = 6;
else if(score <= 70 )
    score = 7;
else if(score <= 80)
    score = 8;
else
    score = 10;
    
```

- 逻辑运算符：&&（与）， ||（或），！（非）
- 替代iso664.h：and，or，not
- 优先级：**！与递增运算符一样，&&大于||**
- 条件运算符： ？：

```
max = a > b ? a : b;

```
- 配对：else 与最近的 if 配对
- 循环辅助continue：程序循环到一部分，可以跳过剩余部分，进行下一轮循环
- 循环辅助break：程序循环到一部，直接跳出该层循环，进入下一阶段
- 多重选择switch ……break：可用来替代ifelse，使用break跳出，不往下继续执行

```
switch (整型表达式)
{
    case 常量1:
        语句
    case 常量2:
        语句
    default:
        语句
}
```
- 多重case标签
- 跳转语句goto：避免使用goto
- **注意：“==” 不要写成“=”，不要忘记打印结果** 

```
#include <stdio.h>
int main(){
	char ch, pre;
	int n = 0;
	while( (ch = getchar()) != '#' ){
		if(pre == 'e' && ch == 'i') //切记
			n++;
		pre = ch;	
	}
	printf("%d\n", n); //切记
	return 0;
}

```
- 综合训练：**注意，getchar连续输入要去掉\n，菜单要过滤字符，退出写在循环条件中**

```
#include <stdio.h>
int main(){
	char choice;
	float fweight = 0, sweight = 0, tweight = 0;
	float fcharge = 0, scharge = 0, tcharge = 0;
	float weight, price, charge, orderCharge, orderWeight, account, extCharge, pay;
	printf("enter a, b, c chooce your goods, q is quit:\n");
	while ( (choice = getchar()) != 'q' )
	{
		if('\n' == choice)
			continue;
		if( choice == 'a' || choice == 'b' || choice == 'c' )
		{
			switch (choice)
			{
				case 'a':
					price = 2.05;
					printf("please enter want to buy yangli weight:\n");
					scanf("%f", &weight); ;
					fweight += weight;
					fcharge += fweight * price;
					printf("%.2f\n", fweight);
					break;
				case 'b':
					price = 1.15; 
					printf("please enter want to buy taincai weight:\n");
					scanf("%f", &weight); 
					sweight += weight;
					scharge += sweight * price;
					printf("%.2f\n", sweight);
					break;
				case 'c':
					price = 1.09;
					printf("please enter want to buy hulubo weight:\n");
					scanf("%f", &weight); 
					tweight += weight;
					tcharge += tweight * price;
					printf("%.2f\n", tweight);
					break;
		        default: ;
		    }
		}
		else
		{
			printf("pleae enter 'a', 'b', 'c' !\n");
		}
		printf("enter a, b, c chooce your goods, q is quit:\n");
	}
	orderWeight = fweight + sweight + tweight; 
	orderCharge = fcharge + scharge + tcharge;
	account = orderCharge > 100 ? orderCharge * 0.05 : 0;
	if( orderWeight <= 5 )
		extCharge = 6.5;
	else if( orderWeight <= 20)
		extCharge = 14;
	else
		extCharge = 14 + (orderWeight-14) * 0.5;
	pay = orderCharge + extCharge - account;
	printf("*******************   order    ******************\n");
	printf("*name-------price------weight-------charge*\n");
	printf("*yang-------$2.05--------%9.2f---------$%9.2f*\n", fweight, fcharge);
	printf("*tian-------$1.15--------%9.2f---------$%9.2f*\n", sweight, scharge);
	printf("*hulobo-----$1.09--------%9.2f---------$%9.2f*\n", tweight, tcharge);
	printf("totalWeight:%.2f, orderCharge:$%.2f", orderWeight, orderCharge);
	printf("account:$%.2f, extCharge:$%.2f, pay:$%.2f\n", account, extCharge, pay);
	printf("*************************************************\n");
	return 0;
}
```

### 友好的交互
- 缓冲区：字符被收集存储的临时存储区（是否有无缓冲输入取决于系统）正常的都是有缓冲输入

```
graph LR
typeHI!-->|无缓冲区程序立即使用| HI!
typeHI!-->|缓冲区| HI!
```
- 结束键盘输入：文件，流，键盘输入

```
#include <stdio.h>
int main(){
    char ch;
    while( (ch =getchar()) != '#')
    {
        putchar(ch);
    }
}
```
**使用的#字符可能会被我们用到，使用#退出并不一定起作用**
**c语言把输入输出设备，视为文件，stdin流表示键盘输入，stdout流表示显示输出**
**使用文件的形式来结束键盘的输入**
- 文件结尾：Ctrl+Z(曾经操作系统)，存储文件大小信息，**EOF（C语言）**

```
#define EOF -1 //stdio.h定义的
```
```
while( (ch =getchar()) != EOF)
```
- - **getchar（）返回int，可能会报信息，但不影响putchar（）输出字符**
- - **正确的使用是找到操作系统，文件终止符识别方案，大多数是Ctrl+D，有些是Ctrl+Z**
- - **EOF不要加字符的‘’**
- 重定向和文件：把stdin流重新赋给文件，主要问题与操作系统有关

```
testFileIO < words            // UNIX与DOS 输入重定向
testFileIO > mywords          //输出重定向 DOS Ctrl+Z结束，UNIX Ctrl+D结束
testFileIO < words > mywords  //组合重定向
```
**不能读多个文件，也不能写多个文件，空格不是必须的，写入的会把之前的覆盖掉**
- 友好的用户界面
**丢弃换行符两种方式比较**

```
if (ch == '\n')   //当输入的字符为换行符时，直接跳入下一轮循环
    continue;
```

```
while( getchar() != '\n' ) //只要输入的字符不为换行符进入下一轮循环
    continue;
```
***问题来了？为什么用第二种不用第一种？***
- 混合字符数字输入：
**1.验证输入正确性2.丢弃换行符**

```
if（2 != scanf("%d%d", &a, &b)）
    break;
```
- 输入验证：
**事先预测可能输入，检测和处理**

```
while( scanf("%ld", &n) == 1 && n > 0 ) //验证正整数
```
- 模块化编程：**用单独的函数，验证输入和管理显示**

```
#include <stdio.h>
void count();
int get_int();
char get_first();
char get_choice();
int main(){
	char choice;
	count();
	while( (choice = get_choice()) != 'q' ){
		switch (choice){
			case 'a':
				printf("buy low, sell high\n");
				break;
			case 'b':
				printf("\a\n");
				break;
			case 'c':
				count();
				break;
			default:
				printf("error!!!\n");
				break;
		}
	}
	return 0;
}
//计数
void count(){
	int n, i;
	printf("Count how far?\n");
	n = get_int();
	for (int i = 0; i <= n; ++i)
	{
		printf("%d\n", i);
	}
	while( getchar() != '\n' )
		continue;
}
//异常处理
int get_int(){
	int n;
	char ch;
	while( scanf("%d", &n) != 1 ){
		while( getchar() != '\n')
			putchar(ch);
		printf("is not a integer!!!\n");
	} 
	return n;
}
//过滤换行符
char get_first(){
	char choice;
	choice = getchar();
	while( getchar() != '\n' )
		continue;
	return choice;
}
//删选合适的字符
char get_choice(){
	char choice;
	printf("please enter a, b, c\n");
	choice = get_first();
	while( (choice < 'a' || choice > 'c') && choice != 'q'){
		printf("please enter correct code!!\n");
		choice = get_first();
	}
	return choice;
}

```


- 实战例子（test57.c）:统计文件字符数

```
#include <stdio.h>
#include <ctype.h>
int main(){
	char ch;
	int count = 0;
	while( (ch = getchar()) != EOF )
	{
		if(isblank(ch) || ch == '\n')
			continue;
		count++;
	}
	printf("count : %d\n", count);
	return 0;
}
```
- 实战例子（test61.c）:二分查找找1-100中的数

```
#include <stdio.h>
int main(){
	int ran, lower = 1, upper = 100, i = 0;
	int smart = (lower + upper) / 2;
	printf("please enter 1 ~ 100 a integer:");
	scanf("%d", &ran);
	while( ran != smart){
		if(ran < smart)
			upper = smart;
		else
			lower = smart;
		i++;
		printf("though %d times = %d\n", i, smart);
		smart = (lower + upper) / 2;
	}
	printf("though %d times = %d\n", i+1, smart);
	return 0;
}
```