# 优先级队列
### 需求动机
- 门诊的队列
- 电脑中cup的调度

### 实现
- 接口
```
template <typename T> struct PQ{
	virtual void insert(T) = 0; //按优先级插入词条
	virtual T getMax() = 0; //取出优先级最高的词条
	virtual T delMax() = 0; //删除优先级最高的词条
}; //与其说是PQ是数据结构，不如说是ADT。根据不同的实现方式，适用于不同的场合
```
- 实现：
- - 向量，列表都不能使三个接口效率达到最
- - 借助BBST(AVL,Splay,Red-black)均满足O(logn
- - 但是BBST的功能超过了PQ的需求
- - 只需查找极值元，不必维护全序，只需维护偏序即可

### 完全二叉堆(Complate Binary heap)
- 逻辑：完全二叉树(Complete Binary Tree)
- 物理：向量(vertor)
- 对应：依层次遍历彼此对应

```
#define Parent(i) ( (i-1) >> 1 ) 
#define LChild(i) ( 1 + ( ( i ) << 1 ) ) //奇数
#define RChild(i) ( ( 1 + (i) ) << 1 ) //偶数
```
- 实现

```
template <typename T> class PQ_ComplHeap : public PQ<T> , public Vector<T> {
	protected: 
		Rank percolateDown( Rank n, Rank i); //下滤
		Rank percolateUp( Rank i ); // 上滤
		void heapify( Rank n); //Floyd建堆算法
	public:
		PQ_ComplHead( T* A, Rank n) { copyFrom(A, 0, n); heapify(n); }
		//批量构造
		void insert(T); //按照比较器确定的优先级次序，插入词条
		T getMax() { return _elem[0]; }
		T delMax();
}
```
- 堆序性：H[i] <= H[ Parent(i) ] 故H[0]为最大元素

### 堆排序
### 左式堆
