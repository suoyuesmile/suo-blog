# 列表(List)
### 接口与实现
> 列表是采用**动态存储**策略的典型结构，其中的元素称作节点(node)
> 各节点通过指针或者引用彼此联结，在**逻辑**上构成一个线性序列

- 从静态到动态操作
- 1）静态：get O(1), search O(logn)
- 2）动态：insert O(n), remove O(n)
- 前驱后继：彼此相邻的节点，前驱或后继若存在则必然唯一
- 首末节点：没有前驱后后继的唯一节点
- 寻位置访问：called-by-position,通过节点的相互引用找到特定的节点
- 实现接口：列表节点作为基本单位  
操作 | 功能
---|---
pred() | 取节点前驱
succ() | 取节点后继
data() | 取节点数据对象
insertAsPred(e) | 插入前驱节点，存入e，返回新节点位置
insertAsSucc(e) | 插入后继节点，存入e，返回新节点位置

```
#define Post(T) ListNode<T>*
template <typename T> struct ListNode {  //完全开放，不再过度封装
	T data;   //数值
	Post(T) pred;  //前驱
	Post(T) succ;  //后继
	ListNode() {}  //针对header和trailer的构造
	ListNode(T e, Posi(T) p = NULL, Post(T) s = NULL) : data(e), pred(p), succ(s) {} //默认构造
	Posi(T) insertAsPred(T const & e); //前插入
	Posi(T) insertAsSucc(T const & e); //后插入
}
```
- 操作接口
- 模板类

```
#include "ListNode.h"
template <typename T> class List {
private:
	int _size;
	Posi(T) header;  //头元素（不可见）
	Posi(T) trailer; //末元素（不可见）
protected:
	//内部函数
public:
	//构造函数
	//析构函数
	//只读接口
	//可写接口
	//遍历接口
};
//构造函数 规模为0
template <typename T> void List<T>::init() {
	header = new ListNode<T>;
	trailer = new ListNode<T>;
	header->succ = trailer;
	header->pred = NULL;
	trailer->pred = header;
	trailer->succ = NULL;
	_size = 0;
}
```
### 无序列表
- 秩到位置：模仿向量的循秩访问方式，重载下标符
- 查找

```
template <typename T> Posi(T) List<T>::find(T const &e, int n, Posi(n) p) const {
	while (0 < n--) 
		if (e == ( p = p->pred )->data )
			return p;
	return NULL;
}
```
- 插入
 
```
template <typename T> Posi(T) List<T>::insertBefore(Posi(T) p, T const & e) {
	_size++;
	return p->insertAsPred(e);  //e当作前驱插入
}
template <typename T> Posi(T) ListNode<T>::insertAsPred(T const & e) {
	Posi(T) x = new ListNode(e, pred, this); //创建
	pred->succ = x;                          //建立连接
	pred = x;
	return x;
}
```
- 基于复制的构造

```
//基于复制的构造
template <typename T> void List<T>::copyNodes(Posi(T) p, int n) {  //O(n)
	init();  //创建头尾节点初始化
	while (n--) {  //自p的n下依次作为末节点插入
		insertAsLast(p->data);
		p = p->succ;
	}
}
```
- 删除节点

```
//删除
template <typename T> T List<T>::remove(Posi(T) p) {  //O(1)
	T e = p->data;     //备份待删除的数值
	p->pred->succ = p->succ; //跳过p
	p->succ->pred = p->pred; //对称
	delete p;
	_size--;
	return e;          //返回数值
}
```
- 析构

```
//析构
template <typename T> List<T>::~List() {
	clear();          //清空列表
	delete header;    //释放头
	delete trailer;   //释放尾
}
template <typename T> int List<T>::clear() {
	int oldSize = _size;
	while(0 < _size)
		remove(header->succ); //反复删除首节点
	return oldSize;
}  //O(n)
```
- 唯一化

```
//唯一化
template <typename T> int List<T>::deduplicate() {
	if (_size < 2)    //平凡列表自然无重复
		return 0;     
	int oldSize = _size;  //记录原规模
	Posi(T) p = first();
	Rank r = 1;           //p从首节点开始
	while ( trailer != ( p = p->succ ) ) {  //依次到末节点
		Posi(T) q = find(p->data, r, p);    //从前驱中查找雷同的
		q ? remove(q) : r++;                //若存在删除，否则秩递增
	}
	return oldSize - _size;                 //列表规模变化，等于删除的元素
}
```
### 有序列表
- 唯一化

```
//有序向量唯一化
template <typename T> int List<T>::uniquify() { 
	if(_size < 2)
		return 0;
	int ordSize = _size;   //原始规模
	ListNodePosi(T) p = first(); 
	ListNodePosi(T) q;
	while ( trailer != ( q = p->succ ) ) //遍历
		if ( p->data != q->data )  //不同
			p = q;  //连接
		else
			remove(q); //雷同删除
	return oldSize - _size;
} //O(n)
```
- 查找

```
//查找
template <typename T> Posi(T) List<T>::search(T const &e, int n, Posi(T) p) const {
	while ( 0 <= n-- )  //从右往左扫描，发现下于即命中
		if ( ( (  p = p->pred )->data ) <= e ) break;
	return p;
}
```
### 选择排序

```
template <typename T> void List<T>::selectionSort(Posi(T) p, int n) {
	Posi(T) head = p->pred;   //待排区间
	Posi(T) tail = p;
	for (int i = 0; i < n; ++i)
	{
		tail = tail->succ;   
	}
	while (1 < n) {          //反复从待排区间找出最大的移至有序区间前端
		insertBefore( tail, remove( selectMax(head->succ), n) );
		tail = tail->pred;
		n--;
	}
}
//尽可能少的使用new delete
template <typename T> Posi(T) List<T>::selectMax(Posi(T) p, int n) {
	Posi(T) max = p;
	for (Posi(T) cur = p; 1 < n; n--) {
		if ( !lt ( (cur = cur->succ )->data, max->data) )
			max = cur;
	return max;   //返回最大节点位置
	}
}
//O(n^2)  但是移动操作远远少于起泡排序
//改进比较操作后可以在nlogn下完成
```

### 插入排序

### LightHouse

# 栈与队列(Stack)
> 一组元素的线性序列，通常只能访问一个元素  
> 开放的端top,不开放的bottom  
> push,pop只能操纵当前的顶部的元素  
### 接口与实现

- 操纵

操纵 | 功能
---|---
Stack() | 初始化栈
empty() | 判断栈是否为空
push(e) | 进栈
pop(e)  | 出栈
size()  | 返回元素数量

- 特性：后进先出(LIFO)
 
- 实现：通过向量或列表派生

```
//向量实现
template <typename T> class Stack :public Vector<T> {
	public: //size() empty()直接沿用
		void push(T const & e) { insert(size(), e); } //入栈
		T pop() { return remove( size() -1 ); }       //出栈
		T & top() { return (*this)[ size() - 1]; }    //取顶 O(1)
};
//列表实现
```

### 进制转换(逆序输出)

```
#include <stdio.h>
#include <iostream>
#include <stack>
using namespace std;
void convert( Stack<char> & S, __int64 n, int base) {
	static char digit[] = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
	while (n > 0) {
		s.push( digit[ n % base ]);
		n /= base;
	}
}
int main(void) {
	Stack<char> S;
	cin >> n >> base;
	convert(S, n, base);
	while ( !S.empty() )
		cout << S.pop();
	return 0;
}
```

### 括号匹配（递归嵌套）

```
#include <stdio.h>
#include <iostream>
#include <stack>
bool paren(const char exp[], int lo, int hi) {
	Stack<char> S;
	for (int i = lo; i < hi; i++)
		if( exp[i] == '(' )
			S.push(exp[i]);
		else if( !S.empty() )
			S.pop();
		else
			return false;
	return S.empty();
}
int main(void) {
	char exp[20] = { '(' };
	paren(exp, 0, 20);
	return 0;
}
//通过计数器也可以实现
//但是通过栈可以拓展到多个括号并存的实例
```

### 栈混洗
- 计数：cabula数 （2n!）/ (n!*(n+1)!)
- 甄别：n = 3 时 3 1 2 不是栈混洗，与元素无关，这是一个禁型，是充要条件

```
//高效算法，引入3个栈，模拟混洗过程，使用贪心算法
//练习
```
- 与括号匹配的联系

### 中缀表达式求值（延迟缓冲）

```
float evaluate(char * s, char * & RPN) {
	Stack<float> opnd; 
	Stack<char> optr;
	optr.push('\0');
	while (!optr.empty()) {
		if (isdigit(*S))
			readNumber(S, opnd);
		else {
			switch( orderBetween(optr.top(), *S) ) {
				case '<':
					optr.push(*S);
					S++;
					break;
				case '=':
					optr.pop();
					S++;
					break;
				case '>': {
					char op = optr.pop();
					if ('!' == op)   //一元运算符
						opnd.push( calcu(op, opnd.pop()) );
					else {           //二元运算符
						float pOpnd2 = opnd.pop(); //操作数
						float pOpnd1 = opnd.pop();
						opnd.push( calcu(pOpnd1, op, pOpnd2) ); //运算并回收
					}
					break;
				}
			}
		}
	}
	return opnd.pop();
}
```

### 逆波兰表达式（RPN）:不需要判断优先级，只要遇到操作符就计算，后缀表达式
- 变形：若欲取之，必先予之

```
1. 括号显示表示优先级
2. 将运算符移动对应的右括号之后
3. 抹去所有运算符
4. 稍加整理
```
- 实现：

```
//练习
```


### 队列实现(Queue)
> 线性的受限序列 :FIFO
> 只允许在队尾插入：enqueue() + rear()  
> 只允许在队头删除：dequeue() + front()  

- 列表派生

```
template <typename T> class Queue : public List<T>{
	public: //size() empty()直接沿用
		void enqueue(T const &e) { insertAsLast(e); } //入队
		T dequeue() { return remove( first() ); } //出队
		T & front() { return first()->data; } //队首
}; //O(1)
```