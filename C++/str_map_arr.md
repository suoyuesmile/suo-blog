
# 字符串、向量、数组
### 名字空间
- 作用域操作符

```
std:: cout << i; //左侧的作用域中找出右侧的名字，头文件不应包含
```
- 使用using声明：最安全的方法

```
using namespace::name;  
using std::cin; //使用cin时从std中获取
using namespace std; //对文件使用名字空间
```
### string库：可变长字符序列
- 头文件：#include <string>
- 定义初始化：直接初始化，拷贝初始化

```
string s1;  //默认初始化
string s1(s2); //直接初始化
string s1 = s2; //拷贝初始化
string s1(n, 'c'); // 初始化成连续字符串
```
- 操作：

表示 | 作用
---|---
<< s | 输出
>> s | 输入
getline(is, s)| 读取一行给s
s.empty() | 判空
s.size() | 返回字符个数
s[n] | 返回第n个字符的引用
s1+s2 | 返回连接的结果
s1 = s2 | 用s2的副本代替s1
s1 == s2 | 字符完全一样相等，大小写敏感
- 读取string

```
string s;
cin >> s; //跳过空格，从第一个字符开始读取，读到下一个空格为止
cout << s << endl;
string s1;
while( cin >> s1 ){
    cout << s1 << endl; //读到文件末尾
}
string s2;
while ( getline(cin, line) ){
    cout << line << endl; // 读一整行
}
```
- empty和size

```
while( getline(cin , line) ){
    if( !line.empty() )
        if(line.size() > 80 )
            cout << line << endl;
}        //跳过空行,输出字符超过80的行
```
- 处理单个字符：使用继承c的库 ctpye.h ---> cctype

```
#incldue <cctype>
for (auto c : str) //使用基于范围的for语句
```

### vector库：对象的集合，所有对象都相同，类模板，每一个对象有一个与之对应的索引，被称为容器
> vector是模板.并非类型

- 头文件：#include <vector>

### 迭代器(7.19)

### 数组

# 表达式
### 成员访问运算符

### sizeof运算符

### 类型转换

### 优先级

# 语句
### 语句作用域
### 范围for语句：遍历容器和其他序列的所有元素
```
vector<int> v = {0,1,2,3,4,5,6,7,8,9};
//范围变量必须是引用型才能进行写操作
for (auto &r : v)
    r *= 2; //v中每个元素的值翻倍
//等价于
for(auto beg = v.begin(), end = v.end(); beg != end; ++ beg)
    auto &r = *beg;
    r *= 2;
```


### 异常处理语句
- throw 表达式：主动抛出异常

```
if(a != b)
    throw runtime_error("data ...");
```
- try……catch表达式：捕获处理异常

```
try {
    ……
}catch (runtime_error err) {
    cout << err.what() << endl;
}
```
- 标准异常

header 1 | header 2
---|---
row 1 col 1 | row 1 col 2
row 2 col 1 | row 2 col 2
