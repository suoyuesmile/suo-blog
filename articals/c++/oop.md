# 面向对象程序设计(7.16)
### oop
- 概述
- 动态绑定

### 基类派生类
- 定义基类

```
class A{};
```

- 定义派生类

```
class B : public A{};
```

- 类型转换与继承

### 虚函数
- 虚函数：实现多态，实现运行期绑定
```
#include <iostream>
using namespace std;
class A  
{  
public:  
    virtual void foo()  
    {  
        cout<<"A::foo() is called"<<endl;  
    }  
};  
class B:public A  
{  
public:  
    void foo()  
    {  
        cout<<"B::foo() is called"<<endl;  
    }  
};  
class C:public A{
    void foo(){
        cout << "C::foo() is calles" << endl;
    }
};
int main(void)  
{  
    A *a = new B();  
    a->foo();   // 在这里，a虽然是指向A的指针，但是被调用的函数(foo)却是B的! 
    a = new C();
    a->foo(); 
    return 0;  
} 
```
- 纯虚函数：方便实现多态性，具有存虚函数不能生成对象，必须由不同的派生类来实现它

```
virtual void foo() = 0;
```



### 抽象基类

### 继承与访问控制
- 三种权限：对于类中成员对外开放的属性

访问权限 | public | protect | private
---|---|---|---
对本类 | 可见 | 可见 | 可见
对子类 | 可见 | 可见 | 不可见
外部调用 | 可见 | 不可见 | 不可见
- 继承方式：子类对父类的访问权限控制
- 1）公有继承：直接继承不改变父类中的权限
- 2）保护继承：把父类中公有成员变换成保护成员
- 3）私有继承：把父类的公有成员和保护成员变为私有成员

```
#include <iostream>
using namespace std;
class A{
private:
	void show(){ cout << "private:A" << endl; }
protected:
	void show2(){ cout << "protected:A" << endl; }
public:
	void show3(){ cout << "public:A" << endl; }
};
class B : public A{
};
class C : protected A{
};
class D : private A{
};
int main(void){
	A a;
	a.show();      //fail
	a.show2();     //fail
	a.show3();     //ok  只有公有成员外部才可以直接调用
	// //公有继承:权限属性不变
	B b;
	b.show();      //fail
	b.show2();     //fail
	b.show3();     //ok
	//保护继承:公有属性转保护属性
	C c;
	c.show();     //fail
	c.show2();    //fail 
	c.show3();    //fail 保护属性
	//私有继承:公有属性，保护继承转私有继承
	D d;
	d.show();     //fail
	d.show2();    //fail 私有属性
	d.show3();    //fail 私有属性
	return 0;
}
```



### 继承类作用域

### 构造函数域拷贝控制

### 容器域继承

### 文本查询