# 排序
### 快速排序(QuickSort)
- 分而治之
- - 将序列分为2个子序列:S = Sl = Sr //O(n)
- - 规模独立：max { |Sl| , |Sr| } < n
- - 彼此独立：max( Sl ) <= min( Sr )
- - 在子序列分别递归底排序之后，原序列自然有序sorted(S) = sorted(Sl) + sorted(Sr)
- - 平凡解：只剩单个元素时，本身就是解
- - 归并排序在于合，quicksort在于分
- 轴点(pivot)
- - 左/右侧的元素，均不比它更大/小
- - 以轴点为届，原序列的划分自然实现：[lo, hi) = [lo,mi) + [mi] + (mi,hi)

```
template <typename T> void Verctor<T>::quickSort( Rank lo, Rank hi) {
	if( hi - lo < 2) return 0; //平凡解
	Rank mi = partition( lo, hi-1 ); //先构造轴点
	quickSort(lo, mi); //前缀排序
	quickSort(mi+1, hi); //后缀排序
} 
```
- - 坏消息：在原始序列中，轴点未必存在
- - 必要条件：轴点必然已然就位
- - 特别的：在有序序列中，所有元素逐个转换成轴00点2
- - 不变性与单调性：L <= pivot <= G; U = [lo, hi],[lo]和[hi]交替空闲
- 实例：

```
轴点为6
6 3 8 2 5 9 4 5 1 7
x 3 8 2 5 9 4 5 1 7
1 3 8 2 5 9 4 5 x 7
1 3 x 2 5 9 4 5 8 7
1 3 5 2 5 9 4 x 8 7
1 3 5 2 5 x 4 9 8 7
1 3 5 2 5 4 x 9 8 7
1 3 5 2 5 4 6 9 8 7
```
- 性能
- - 不稳定
- - 空间：只需要O(1)
- - 时间：不能保证划分的均衡性，最好O(nlogn)，最坏O(n^2)
- - 采取随机选取，三者取中，只能降低最坏的情况，而无法根本的杜绝
- - 总结：平均性能O(nlogn),根据均匀独立分布为例，准确的1.39logn

### 快排变种
- 不变性：四个部分S = [lo] + L(lo, mi] + G(mi, k) + U[k, hi], L < pivot <= G
- 单调性：K不小于轴 ? 直接拓展G ： G滚动后移，L拓展 pivot <= S[k] ? k++ : swap(S[++mi], S[k++])
- 代码

```
template <typename T> Rank Vector<T>::partition( Rank lo, Rank hi) {
	swap( _elem[ lo ], _elem[ lo + rand() % ( hi - lo + 1 ) ] );//随机交换
	T pivot = _elem[ lo ];
	int mi = lo;
	for ( int k = lo + 1; k <= hi; k++ ) //自左向右考查每个[k]
		if( _elem[ k ] < pivot ) //若k小于轴点，则将其与[mi]交换，L向右扩展
			swap( _elem[ ++mi ], _elem[ k ]);
	swap( _elem[ lo ], _elem[ mi ] ); //候选抽点归位
	return mi;//返回轴点的秩
} 
```
- 实例
```
6  3  8 1 5 9 8 4 5 7 2
6 3  8  1 5 9 8 4 5 7 2
6 3 1 5  8  9 8 4 5 7 2
6 3 1 5  8 9  8 4 5 7 2
6 3 1 5  8 9 8  4 5 7 2
6 3 1 5 4  9 8 8  5 7 2
6 3 1 5 4 5  9 8 8  7 2
6 3 1 5 4 5  9 8 8 7  2
6 3 1 5 4 5 2   8 9 7 8
2 3  1 5 4 5 6  8 9 7 8
//时间O(n)
//空间O(1)
//不稳定
```
### 选取
- k-selection：在任意大小的元素中，如何由小到大，找到次序为k者，亦即
- median：长度为n中选择位于中间的那个数
- majoerity：无序向量，若有一半以上元素同为m，称之为众数
- 平凡算法 排序+扫描，必要性，众数存在必为中位数
- 事实上，只要能够找到中位数，就能判断是否为众数
- 众数若存在，则必为频繁数
- 策略：减而治之

### 通用算法
### 希尔排序
### 更加的序列

