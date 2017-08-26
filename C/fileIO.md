# 文件输入输出
### 文件通信
- 重定向：books > bklist 可能会把不必要的东西输出到文件
- 文件：一系列连续的字节，文本模式，二进制模式
- 文件模式：所有文件内容都以二进制形式存储
- 文本文件：最初使用二进制编码的字符表示文本
- 二进制文件：二进制值代表机器语言代码或数值数据或图片或音乐编码
- 不同操作系统处理不同 MS-DOS读文件\r\n-->\n写文件\n-->\r\n
- I/O级别：底层I/O使用操作系统标准I/O，标准高级I/O使用stdio.h头文件的定义的（通用）
- 标准文件：C打开3个文件，标准输入（键盘），标准输出，标准准错误输出（显示器）

### 标准I/O
- 好处：可移植性强，专门函数简化了操作，输入输出优势缓冲的
- 演示：

```
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char * argv[]){
	int ch;       //读取文件,存储每个字符的地方
	FILE *fp;     //文件指针
	unsigned long count = 0;
	if(argc != 2){
		printf("Usage: %s filename \n", argv[0]);
	}
	if( (fp = fopen(argv[1], "r")) == NULL ){
		printf("can't open %s\n", argv[1]);
		exit(EXIT_FAILURE);
	}
	while( (ch = getc(fp)) != EOF ){
		putc(ch, stdout);
		count++;
	}
	fclose(fp);
	printf("File %s has %lu characters\n", argv[1], count);
	return 0;
	
}
```
- 检查命令行参数：exit()关闭文件并结束程序（0或EXIT_SUCCESS结束成功，EXIT _FALLURE结束失败）
- fopen函数：打开文件，成功打开后返回文件指针（FILE*）

```
FILE * fp = fopen("words", "r");
```
模式 | 含义
---|---
r | 读模式
w | 写模式（文件长度截0，可以创建新文件）
a | 写模式（添加字符，可以创建新文件）
r+ | 更新模式（读写）
w+ | 更新模式（读写，截断，创新）
a+ | 更新模式（读写，添加，创新）
*b | 二进制文件用法同上
- getc和putc函数：与getchar,putchar类似

```
ch = getchar();   ch = getc(fp);   //文件输入
ch = putchar();   ch = putc(fpout) //文件输出
```
- 文件结尾：避免读到空文件，使用入口循环

```
while( (ch = getc(fp)) != EOF) { putc(fpout); }
```
- fclose函数：关闭指定的文件，必要刷新缓冲取区

```
if (fclose(fp) != 0 )  //成功放回0,否则返回EOF
    printf("error in closing file %s\n", argv[1]);
```
- 指向标准文件的指针

标准文件 | 文件指针 | 设备
---|---|---
标准输入 | stdin | 键盘
标准输出 | stdou | 显示器
标准错误 | stder | 显示器

### 文件压缩程序

```
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 40
int main(int argc, char * argv[]){
	FILE *in, *out;
	int ch;
	char name[N];
	int count;
	//检查命令行参数
	if(argc < 2){
		fprintf(stderr, "Usage:%s filename\n", argv[0]);
		exit(EXIT_FAILURE);
	}
	//设置输入
	if( (in = fopen(argv[1], "r")) == NULL){
		fprintf(stderr, "I could not open this file\" %s \" \n ", argv[1]);
		exit(EXIT_FAILURE);
	}
	//设置输出
	strncpy(name, argv[1], N - 5);
	name[N -5] = '\0';
	strcat(name, ".red");
	if( (out = fopen(name, "w")) == NULL ){
		fprintf(stderr, "I could not open this file");
		exit(3);
	}
	//拷贝
	while( (ch = getc(in)) != EOF ){
		if (count++ % 3 == 0)
			putc(ch, out);
	}
	//关闭文件
	if( fclose(in) != 0 || fclose(out) != 0 )
		fprintf(stderr, "Error in closing files\n");
	return 0;
}
```
### 文件I/O
- fprinf和fscanf函数：与printf和scanf类似，区别在于，前面需要第一个参数待处理的文件。

```
fprintf(fp, "%s\n", words);
fscanf(fp, "%s\n", words);
```
- fgets和fputs函数：

```
fgets(buf, LEN, fp);    // buf char型数组的名称，fp指针
fputs(buf, fp);         
```
### 随机访问
- fseek() ftell()函数：文件看成数组，fseek返回int.ftell返回long

```
fseek(fp, 0L, SEEK_END); //定位到文件末尾
// 1）FILE指针,指向待查找的文件
// 2）偏移量，从起始点开始要移动的距离，正负0
// 3）模式，SEEK_SET文件开始, SEEK_CUR当前位置，SEEK_END文件末尾
// 正常返回0，c出现错误返回-1
ftell(fp) //返回当前位置
```
- 二进制模式和文本模式：
- - UNIX只有一种文件格式，不需要特殊转换，MS-DOS很多编辑器都是用ctrl+z来标记文件结尾的二进制文件和文本文件模式的另一个不同的地方，
- - MS_DOS用户\r\n来标识文件结尾,c程序会把\r\n看做成\n,对于ftell()返回值把\r\n当作一个字节来计数
- 可移植性：
- - 二进制模式中，实现不必支持SEEK_END模式，因此无法保证程序的可移植性，更好的办法是一个一个字节读取整个文件
- - 文本模式中，只有使用fseek才能保证其相应的行为
- fgetpos函数，fsetpos函数：新增的定位函数，突破long的限制

```
int fgetpos(FILE * restrict stream, fpos_t * restrict pos); // 成功返回0，失败返回非0
// 把fpos_t的值放在pos指向的位置
int fsetpos(FILE * stream, const fpos_t * pos); //成功返回0，失败返回非0
// 使用fpos_t设置文件指针指向该值指向的位置
```
### 标准IO机理
 
```
//第一步：调用fopen打开文件
//1）自动打开3个标准文件 
//2）打开文件 
//3）打开一个或者两个缓冲区以及其文件缓冲的数据结构 
//4）返回一个指向该结构的指针
FILE * fp = fopen("words", "a+");

//第二步：调用stdio.h中的输入函数
//1）文件的数据块被拷贝至缓冲区
//2）设置缓冲区大小，设置fp所指向结构中的值（流中当前位置和拷贝进缓冲区的字节数）

```
### 其他标准IO函数

函数 | 作用
---|---
int ungetc(int, FILE*) | c指定的字符放回输入流
int fflush(FILE*) | 刷新缓冲区
int setcbuf(FILE*,char *, int, size_t) |创建一个供io替换的缓冲区
size_t fread() | 二进制out
size_t fwirte() | 二进制in

- size_t fwrite函数：返回sizeof运算后的类型

```
size_t fwrite(const void * restrict ptr, size_t size, size_t nmemb, FILE * restrict fp);
// ptr 待写入的地址，size数据块的大小， nmemb带写入数据块的数量，fp待写入的文件
char buffer[256];
fwrite(buffer, 256, 1, fp);
double earnings[10];
fwrite(earings, sizeof(double), 10, fp);
```
- size_t fread函数：返回sizeof运算后的类型

```
size_t fwrite(void * restrict ptr, size_t size, size_t nmemb, FILE * restrict fp);
// ptr 待读取文件数据在内存中的地址，size数据块的大小， nmemb带写入数据块的数量，fp待读取的文件
char buffer[256];
fwrite(buffer, 256, 1, fp);
double earnings[10];
fwrite(earings, sizeof(double), 10, fp);
```