# 向量(Vector)
### 接口与实现
> 抽象数据类型(ADT:Abstract Data Type) = 数据模型 + 一组操作  
> 数据结构(DS:Data Structure) = 基于某种特定语言 + 实现ADT的一整套算法

- 数组：每个元素由编号唯一指代，并可以直接访问，亦称为线性数组
- 向量：数组的抽象和泛化，由一组元素按线性次序封装而成

```
1）个元素与[0,n)整数一一对应，称成秩（RANK）
2）元素类型不限于基本类型
3）操作，管理，维护，更加简化安全
4）可以为便捷的参与更加复杂的操作定制
```
- 模板：灵活指定类型,利用组成更复杂的数据结构

```
template <typename T> Vector;
Vector < int > myvertor;
Vector <BinTree> forest;
```

- ADT接口：丰富的操作接口

操作 | 功能
---|---
size() | 向量的规模
get(r) | 获取秩为r的元素
put(r,e) | 用e替换秩为r的元素
insert(r,e) | e作为秩为r的元素插入，原后继元素后移
remove(r) | 剔除秩为r的元素
disordered() | 判断所有元素是否已按非降序排列
sort() | 调整元素位置，使之按非降序排列
find(e) | 找到目标元素e放回秩
deduplicate() | 剔除重复元素
traverse() | 遍历所有元素

```
typedef int Rank;          //秩
#define DEFAULT_CAPACITY 3 //默认容量
template <typename T> class Vector{
private: 
	Rank _size;      //规模
	int _capacity;   //容量
	T* _elem;        //数据区
protected:
	//内部函数
public:
	//构造函数
	Vector(int c = DEFAULT_CAPACITY){ _elem = new T[_capacity = c]; _size = 0; } //默认
	Vector(T const *A, Rank lo, Rank hi) { copyFrom(A, lo, hi); } //数组区间复制
	Vector(Vector<T> const& V, Rank lo, Rank hi) { copyFrom(V._elem, lo, hi); } //向量区间复制
	Vector(Vector<T> const& V) { copyFrom(V._elem, 0, V._size); } //向量整体复制

	//析构函数
	~Vector() { delete [] _elem; }

	//只读接口
	//可写接口
	//遍历接口
}
//复制
template <typename T> void Vector<T>::copyFrom(T* const A, Rank lo, Rank hi) {
	_elem = new T[_capacity = 2*(hi - lo)];  //分配空间，预留2倍的空间
	_size = 0; //规模清零
	while (lo < hi) {
		_elem[_size++] = A[lo++];
	} //元素逐一复制[0, hi-lo)
}
//扩容
template <typename T> void Vector<T>::expand() { 
	if(_size < _capacity) return;    //尚满，不扩
	_capacity = max(_capacity, DEFAULT_CAPACITY); //不低于最小容量
	T* oldElem = _elem;   
	_elem = new T[_capacity <<= 1];  //容量加倍
	for (int i = 0; i < _size; ++i)  //复制原向量内容  
		_elem[i] = oldElem[i];       // = 重载了的
	delete [] oldElem;               //释放原空间
}
```

### 可扩充向量：可能出现上溢(overflow)或者下溢(underflow)
> 上溢：不足以存放所有元素 ，空间不足  
> 下溢：寥寥无几，装填因子：_size/_capacity << 50%,空间效率低
- 蝉的哲学：每生长一段时间，蜕掉外壳，生成新的壳
- 即将上溢时适当的增加容量
- 得益于向量的封装，扩容后数据区的指针改变了，但不至于出现野指针
- 容量加倍策略：成本好于容量递增策略

```
复杂度：最坏情况，在初始容量为1的满容量中，连续插入n = 2^m
当n = 1，2，4，8，16....时扩容
空间上损失换取时间上的巨大收益
```
策略 | 递增策略 | 加倍策略
---|---|---
累计增容时间 | O(n^2) | O(n)
分摊增容时间 | O(n) | O(1)
装填因子 | 约100% | >50%
> 平均复杂度：加权平均数，独立的考察平均程度  
> 分摊分析：整体的考虑，连续的足够多次操作，总体成本分摊到单次操作，更加准确分析数据结构和算法成本

### 无序向量：
- 元素的访问：沿用下标式操作，对下标操纵符进行重载

```
template <typename T> T & Vector<T>::operator[](Rank r) const { return _elem[r]; } //循秩访问
```
- 插入：1.扩容2.后移(从后开始)3.赋值4.规模+1

```
template <typename T> Rank Vector<T>::insert(Rank r, T const & e) {
    expand();       //若满，扩容
    for(int i = _size; i > r; i--) 
        _elem[i] = _elem[i-1];    //原r后的整体元素后移一位(后开始)
    _elem[r] = e;   //r处赋值
    _size++;        //规模加一
    return r;       //返回秩
}
```
- 删除：1.单独处理2.前移(从前开始)3.更新规模4.缩容

```
template <typename T>   // 删除区间hi-lo
int Vector<T>::remove(Rank lo, Rank hi) {
    if (lo == hi) 
        return 0;   //单独处理退化
    while (hi < _size)
        _elem[lo++] = _elem[hi++]; //整体前移一段(前开始)
    _size = lo;
    shirnk();       //缩容
    return hi - lo;
}
```
- 单元素删除：调用多元素删除

```
template <typename T> T Vector<T>::remove(Rank r) {
    T e = _elem[r];
    remove(r, r+1);
    return e;
}
```
- 查找：无序向量，默认重载判等和比较操纵符，逆向扫描

```
template <typename T> Rank Vector<T>::find(T const & e, Rank lo, Rank hi) const {
    while ((lo < hi--) && e != _elem[hi])    //逆向查找
        return hi;
}
//最坏O(n)最好O(1) 输入敏感
```
- 无序向量唯一化：剔除重复的元素

```
template <nametype T> int Vector<T>::deduplicate() {
    int oldSize = _size;
    Rank i = 1;               //从第二个元素开始
    while (i < _size)         //由前向后逐步考查
        (find(_elem[i], 0, i) < 0) ?
        i++ : remove(i);      //删除雷同者
    return oldSize - _size;   //删除的总数
}
//成本：O(n^2)
//优化
```
- 遍历：visit操作

```
//使用函数指针局部修改
template <typename T> void Vector<T>::traverse(void (*visit)(T&)) {
    for (int i = 0; i < _size; i++)
        visit(_elem[i]);
}
//使用函数对象
template <typename T> template <typename TSV>
void Vector<T>::traverse(TSV & visit)) {
    for (int i = 0; i < _size; i++)
        visit(_elem[i]);
}
```
### 有序向量：唯一化
- 相邻逆序对数目可以来度量向量的逆序程度

```
template <typename T> int Vector<T>::disordered() const {
	int n = 0;
	for (int i = 0; i < _size; i++)  //逐一检查各对相邻元素
		n += (_elem[i - 1] > _e[i]); //逆序则计数向量有序
	return n;                        //当且仅当n=0时
} //只判断是否有序，首次遇到逆序对直接终止
```
- 唯一化：低效与高效算法

```
template <typename T> int Vector<T>::uniquift() {
	int oldSize = _size;
	int i = 0;
	while (i < _size-1) //雷同删除后者
		(_elem[i] == _elem[i+1]) ? remove(i+1) : i++;
	return oldSize - _size;
}
//最坏情况:O(n^2) 省去了find但竟然与无序向量竟然相同，低效算法
//反思：每个元素都多次进行多次前移
//改进：成批的删除(移动覆盖删除)
template <typename T> int Vector<T>::uniquift() {
	Rank i = 0, j = 0; //相邻互异元素
	while(++j < _size) //跳过雷同者，不同者紧靠前者右侧
		if(_elem[i] != _elem[j])
			_elem[++i] = _elem[j];
	_size = ++i;
	shirnk();
	return j - i;
}
//常数迭代时间O(n)
```
### 有序向量：二分查找

```
template <typename T> int Vector<T>::search(T const & e, Rank lo, Rank hi) {
	return (rand() % 2) ?
	binSearch(_elem, e, lo, hi)
	: fibSearch(_elem, e, lo, hi);
}
```
- 语义约定：利于有序向量的自身的维护V.insert(1+search(e), e)

```
约定：在有序向量区间V[lo,hi)中，确定不大于e的最后一个元素
失败：若 < V[lo] 则返回lo-1
若 > V[hi-1] 则返回hi-1
重复：插入到不同的上一位

```
- 二分查找：折半查找，减而治之

```
1)减而治之，以任一元素x=S[mi]为届，将带查找区间分三部分S(在[lo,mi) <= S[mi] <= S[mi,hi]
2)将目标元素e与x作比较，分三种情况处理
   1. e < x : 必属左侧子区间，递归深入
   2. e > x : 必属右侧子区间，递归深入
   3. e = x : 命中目标，随即返回
3)二分折半策略：轴点mi总是取作中点，每经过最多2次比较，或者命中或者将规模缩减至半

//二分查找
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (lo < hi) {
		Rank mi = (lo + hi) >> 1;
		if (e < A[mi]) 
		    hi = mi;     //三种情况
		else if ( A[mi] < e) 
		    lo = mi + 1;
		else 
		    return mi;
	}
	return -1;  //查找失败
}
//复杂度分析
//递推分析：T(n) = T(n/2) + O(1) = O(log(n))
//递归跟踪：递归深度log(n),每次O(1),总的O(log(n))
//查找长度：关键码的比较次数
//精确的为：1.5log(n)
```
### 有序向量：fibonacci查找
> 二分查找的改进，转向左，右分支前的关键码比较次数不等，递归深度不同，对转向成本进行补偿

```
//fib查找
template <typename T> static Rank fibSearch(T * A, T const &e, Rank lo, Rank hi) {
	Fib fib(hi - lo);   //创建fib数列
	while(lo < hi) {
		while (hi - lo < fib.get())
			fib.prev(); //向前查找确定fib(k)-1的轴点
		Rank mi = lo + fib.get() - 1; //切分
		if (e < A[mi])  //前半段
			hi = mi;    
		else if (A[mi] < e)
			lo = mi + 1;//后半段
		else 
			return mi;  //命中
	}
	return -1;
}
//时间复杂度：O(log(n))
//精确复杂度：< O(1.5log(n)) 优于二分查找
```
- 最优轴点：二分查找对应0.5，fibonacci查找对应的0.6180339黄金分割比

### 有序向量：改进二分查找，缩短长度到1，算法更加稳定

```
左右分支不平衡问题
解决方案：只设置两个区间
1. e < x ,若e存在必属S[lo, mi),递归深入
2. x <= e, 若e存在必属S[mi, hi),递归深入
当hi - lo = 1时，判断是否命中
//二分查找B
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (1 < hi - lo) {
		Rank mi = (lo + hi) >> 1;
		(e < A[mi]) ? hi = mi : lo = mi;
	}
	return (e == A[mi]) ? lo : -1;
}
//复杂度分析：最好的情况更坏，更坏的情况更好，稳定性高
//严格兑现了语义约定：多个命中元素，返回最靠右的
//失败时，返回小于e的最大者

//二分查找C
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (lo < hi) {
		Rank mi = (lo + hi) >> 1;
		(e < A[mi]) ? hi = mi : lo = mi + 1;
	}
	return --lo;
}
```

### 有序向量：插值查找(以后研究)
- 均匀独立的随机分布

### 起泡排序

```
//排序接口
template <typename T> void Vector<T>::sort(Rank lo, Rank hi) {
	switch (rand() % 5) {
		case 1: bubbleSort(lo, hi); break;  //起泡排序
		case 2: selectSort(lo, hi); break;  //选择排序
		case 3: mergeSort(lo, hi); break;   //归并排序
		case 4: heapSort(lo, hi); break;    //堆排序
		case 5: quickSort(lo, hi); break;   //快速排序
	}
}
//起泡排序(改进版)
template <typename T> void Vector<T>::bubbleSort(Rank lo, Rank hi) {
	while (!bubble(lo, hi--));               //扫描直至全序      
}
template <typename T> bool Vector<T>::bubble(Rank lo, Rank hi) {
	bool sorted = true;                      //有序标志
	while (++lo < hi)                        //整体扫描
		if (_elem[lo - 1] > _elem[lo]) {     //若存在逆序
			sorted = false;                  //整体尚未有序的
			swap(_elem[lo - 1], _elem[lo]);  //交换
		}
	return sorted;                           //返回序标
}
//复杂度：O(n^2) 改进节省相当多的时间（三角形变梯形），依然有改进空间
//改进后可以使之为O(n^1.5)
//再次改进
//起泡排序(再次改进)
template <typename T> void Vector<T>::bubbleSort(Rank lo, Rank hi) {
	while (lo < ( hi = bubble(lo, hi) ) );               //扫描直至全序      
}
template <typename T> Rank Vector<T>::bubble(Rank lo, Rank hi) {
	Rank last = lo;             
	while (++lo < hi)
		if (_elem[lo - 1] > _elem[lo]) {
			last = lo;
			swap(_elem[lo - 1], _elem[lo]);
		}
	return sorted;
}
//省去更多的时间，跳过有序的部分，最好的情况一样O(n)，最坏的情况依然是O(n^2)
```
- 稳定性：重复的元素在输入,输出相对的次序,是保持不变的
- 起泡排序也是稳定的，元素a，b的相对位置发生变化，只有一种可能：
- 1）分别与其他元素交换，二者相互接近和相邻
- 2）接下来的一轮扫描交换中，二者因逆序而交换位置

### 归并排序：基于**分治策略**(递归分解)
> 基于的比较排序：存在的上下界，O(n2) ---bubbleSort-----------mergeSort--> O(nlogn)  

- 二路归并算法原理：
```
序列1：21 - 13 - 8 - 5   
序列2：29 - 19 - 4 - 2
归并： 2 - 4 - 5 - 8 - 13 - 19 - 21 - 29
```

```
//归并排序
template <typename T> void Vetor<T>::mergeSort(Rank lo, Rank hi) {
	if (hi -lo < 2) return;   //处理递归基，单元素区间自然有序
	int mi = (lo + hi) >> 1;  //中心点
	mergeSort(lo, mi);        //前端递归
	mergeSort(mi, hi);        //后段递归
	merge(lo, mi, hi);        //归并
}
template <typename T> void Vector<T>::merge(Rank lo, Rank mi, Rank hi) {
	T * A = _elem + lo;       //合并后的向量
	int lb = mi - lo;         //前子向量
	T * B = new T[lb];        //复制前子向量
	for (Rank i = 0; i < lb; B[i] = A[i++])
		;
	int lc = hi - mi;         //后子向量
	T * C = _elem + mi;       //B[j]和C[k]小者转移A末尾
	for (Rank i = 0, j = 0, k = 0; (j < lb) || (k < lc); ) {
		if( (j < lb) && (lc <= k) || (B[j] <= C[k]) )
			A[i++] = B[j++];
		if( (k < lc) && (lb <= j) || (C[K] <= B[j]) )
			A[i++] = C[k++];
	} //循环紧凑，效率不如拆分
	delete [] B;
}
//正确性：
//复杂度：for (...; (j < lb) || (k < lc); ) {
    if() { A[i++] = B[j++] ; }
    if() { A[i++] = C[k++] ; }
}
for循环为主要消耗： j + k = n 总迭代不过O(n)线性时间
总的 T(n) = 2T(n/2)  ==> O(nlogn)  最坏情况下
```