# 类(7.14)
> 基本思想：数据抽象，封装。数据抽象是一种依赖于接口于实现分离式编程技术

### 抽象数据类型
- 设计类
- 改进类
- 定义成员函数
- 引入this
- 引入const成员函数
- 类作用域和成员函数
- 外部定义成员函数
- 定义返回this对象的函数
- 定义非成员函数
- 构造函数：特殊的成员函数控制对象的初始化，只要对象被构建就会执行构造函数

```
1）没有返回类型，含有一个参数列表和函数体
2）可以包含多个构造函数，但构造函数之间必须是重载的
3）构造函数不能声明成const,创建const对象时，直到构造函数完成才能获得常量属性
4）没有构造函数会执行默认初始化，通过一个特殊的构造函数来初始化对象，无须任何实参
5）执行顺序，存在类内初始值，用其初始化，否则默认构造函数初始化
6）只有当不存在任何构造函数的情况下，编译器才会帮我们创建默认构造函数，否则不会
7）包含内置类型或复合类型的成员可能产生未定义的值
8）类中包含其他类型成员且这个成员的类型没有默认构造函数，也不会生成默认构造函数
```

- 拷贝赋值析构

### 访问控制、封装
- 公有与私有
- 友元：允许一个非成员函数访问类的私有成员，关键词friend，声明可以出现在类内部的任何地方
- - 1)将非成员函数reset()，声明为example类的友元，可以访问私有成员
```
//
class example; // 这里必须对类 example 做前向声明，否则下面的函数声明将报错  
void reset(example &e);  
  
class example  
{  
public:  
    friend void reset(class example &e);  
private:  
    int n;  
};  
  
// 该函数定义必须放在类 example 的后面，否则无法解析变量n  
void reset(example &e)  
{  
    e.n = 0;  
} 
```
- - 2)将man设为woman的友元类，这样man对象的任何成员函数都可以访问woman的私有成员  
```
class woman; // 前向声明  
class man  
{  
public:  
    void disp(woman &w);  
    void reset(woman &w);  
};  
class woman  
{  
public:  
    friend class man; // 
private:  
    string name;  
};  
  
void man::disp(woman &w)  
{  
    cout << w.name << endl;  
}  
  
void man::reset(woman &w)  
{  
    w.name.clear();  
}  
```
- - 3)将一个类的成员函数声明为一个另一个类的友元函数，从而来访问私有函数
```
[cpp] view plain copy print?
class woman; // 前向声明  
  
class man  
{  
public:  
    void disp(woman &w);  
    void reset(woman &w);  
};  
  
class woman  
{  
public:  
    friend void man::disp(woman &w);
  
private:  
    string name;  
};  
  
void man::disp(woman &w)  
{  
    cout << w.name << endl;  
}  
  
// man的reset()成员函数不是woman类的友元函数，因此不能访问其私有成员  
/* 
void man::reset(woman &w) 
{ 
    w.name.clear(); 
} 
*/ 
```
- - **友元定义与声明存在依赖关系，一定要弄清楚顺序**
> 原则：对象的声明里的其他对象必须放在该对象之前声明，对象的定义里的对象必须放在该对象之前定义
- - 重载函数：多个重载函数的版本，那么可以将其中的一个或者几个设为某个类的友元。其他的函数不受此设置的影响
- - 友元必须具备public权限，否则不能调用

### 类的特性
- 类成员
- 返回*this函数
- 类类型
- 友元2

### 类作用域
- 名字查找
- 构造函数2
- 委托构造函数
- 默认构造函数
- 隐式类转换
- 聚合类

### 静态成员
- 声明静态成员
- 使用静态成员
- 定义静态函数
- 内类初始化
- 特殊作用