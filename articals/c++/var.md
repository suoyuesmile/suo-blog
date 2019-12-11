# 变量和基本类型
### 变量
### 复合类型：基于其他类型定义的类型
- 引用：为对象起的别名，已经存在的对象的另一个名字

```
int ival = 1024;
int &refVal = ival; //引用定义时必须被初始化
//引用定义时必须和初始值绑定在一起，无法再绑定其他值
//引用并非对象无法定义引用的引用
//引用只能绑定在对象上，不能绑定常量
//绑定时类型必须严格的匹配
```
- 指针：本身就是一个对象，允许赋值和拷贝

```
int ival = 42;
int *p = &ival; // 类型严格匹配
```
- - 指针的值：4种情况

```
//1）指向一个对象
//2）指向紧邻对象的下一个位置
//3）空指针，不指向任何对象
//4）无效指针其他值
```
- - 指针访问对象：使用解引用符，间接访问符

```
cout << *p << endl; //p为指向a的指针
```
- - 空指针：不指向任何对象

```
int *p = nullptr; //生成空指针
int *p = 0;
int *p = NULL; //预处理变量 include cstdlib
```
- - void*：特殊的指针，存任意对象的地址

```
double obj = 3.14, *pd = &obj;
void *p = &obj; //不能直接操作对象
p = pd;    //指向同一个对象
```
- - 定义多个变量

```
int* p, q;   //一个指针一个变量
int *p, *q;  //两个指针
```
- - 指向指针的指针

```
int ival = 1024;
int *p = &ival;
int **pi = &p;
```

```
graph LR
pi[p的地址]-->p[ival的地]
p[ival的地址]-->ival[1024]
```



### const：限定对象不被改变
- 初始化和const：const的对象一旦创建就不能被改变，所以必须初始化

```
const int buff = 512;     //编译时初始化
const int i = getSize();  //运行时初始化
//默认情况仅在文件内有效
//想要文件共享const，定义和声明都必须加extern
//如果其中一个没加会报错undefined reference to `a'
collect2.exe: error: ld returned 1 exit status
```

- const的引用：**对常量的引用，不能用作修改他所绑定的对象**

```
const int ci = 1024; //常量对象
const int &r1 = ci;  //必须加const
r1 = 42;             //错误，不允许改变值
int i = 1024;        //非常量对象
const int &r1 = i;   //允许
const int &r2 = 42;  //允许
const int &r3 = r1 * 42; //允许
```
> 对常量的引用可能引用一个并非常量的对象，但不允许它修改对象的值

- const的指针：**常量指针必须初始化,不能修改指针的指向**

```
int a = 0;
int * const p = &a;
const b = 1024;
const int * const q = &b;
```


### 类型处理
### 结构
- 内存字节对齐原则：
- 1）第一个成员的地址为0，以后的每一个成员的地址，都要以该成员大小为整数倍地址来开始存储
- 2）结构体作为成员要从最大的元素地址的整数倍开始存储
- 3）结构体的总大小要是最大元素的整数倍，不然就要补齐

```
typedef struct bb
{
 int id;             //[0]....[3]
 double weight;      //[8].....[15]　　　　　　原则１
 float height;      //[16]..[19],总长要为８的整数倍,补齐[20]...[23]　　　　　原则３
}BB;
//24
typedef struct aa
{
 char name[2];     //[0],[1]
 int  id;         //[4]...[7]　　　　　　　　　　原则１

 double score;     //[8]....[15]　　　　
 short grade;    //[16],[17]　　　　　　　　
 BB b;             //[24]......[47]　　　　　　　　　　原则２
}AA;
//48
struct stu
{
	union{
		char bj[5];
		int bh[2];
		} Class;  //[0]....[5]
	char xm[8];   //[8]....[16]
	float cj;     //[16]...[19]
}xc;
//20
```