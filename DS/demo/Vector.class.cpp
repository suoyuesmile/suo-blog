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
template <typename T>
void Vector<T>::copyFrom(T* const A, Rank lo, Rank hi) {
	_elem = new T[_capacity = 2*(hi - lo)];  //分配空间，预留2倍的空间
	_size = 0; //规模清零
	while (lo < hi) {
		_elem[_size++] = A[lo++];
	} //元素逐一复制[0, hi-lo)
}
//扩容
template <typename T>
void Vector<T>::expand() { 
	if(_size < _capacity) return;    //尚满，不扩
	_capacity = max(_capacity, DEFAULT_CAPACITY); //不低于最小容量
	T* oldElem = _elem;   
	_elem = new T[_capacity <<= 1];  //容量加倍
	for (int i = 0; i < _size; ++i)  //复制原向量内容  
		_elem[i] = oldElem[i];       // = 重载了的
	delete [] oldElem;               //释放原空间
}
template <typename T>
Rank Vector<T>::insert(Rank r, T const & e) {
    expand();       //若满，扩容
    for(int i = _size; i > r; i--) 
        _elem[i] = _elem[i-1];    //原r后的整体元素后移一位(后开始)
    _elem[r] = e;   //r处赋值
    _size++;        //规模加一
    return r;       //返回秩
}
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
template <typename T>
T Vector<T>::remove(Rank r) {
    T e = _elem[r];
    remove(r, r+1);
    return e;
}
template <typename T>
Rank Vector<T>::find(T const & e, Rank lo, Rank hi) const {
    while ((lo < hi--) && e != _elem[hi])    //逆向查找
        return hi;
}
template <nametype T>
int Vector<T>::deduplicate() {
    int oldSize = _size;
    Rank i = 1;               //从第二个元素开始
    while (i < _size)         //由前向后逐步考查
        (find(_elem[i], 0, i) < 0) ?
        i++ : remove(i);      //删除雷同者
    return oldSize - _size;   //删除的总数
}
template <typename T> template <typename TSV>
void Vector<T>::traverse(TSV & visit) {
    for (int i = 0; i < _size; i++)
        visit(_elem[i]);
}
template <typename T> 
int Vector<T>::disordered() const {
	int n = 0;
	for (int i = 0; i < _size; i++)  //逐一检查各对相邻元素
		n += (_elem[i - 1] > _e[i]); //逆序则计数向量有序
	return n;                        //当且仅当n=0时
} //只判断是否有序，首次遇到逆序对直接终止
// template <typename T> int Vector<T>::uniquift() {
// 	int oldSize = _size;
// 	int i = 0;
// 	while (i < _size-1) //雷同删除后者
// 		(_elem[i] == _elem[i+1]) ? remove(i+1) : i++;
// 	return oldSize - _size;
// }
template <typename T> int Vector<T>::uniquift() {
	Rank i = 0, j = 0; //相邻互异元素
	while(++j < _size) //跳过雷同者，不同者紧靠前者右侧
		if(_elem[i] != _elem[j])
			_elem[++i] = _elem[j];
	_size = ++i;
	shirnk();
	return j - i;
}
//查找
template <typename T> int Vector<T>::search(T const & e, Rank lo, Rank hi) {
	return (rand() % 2) ?
	binSearch(_elem, e, lo, hi)
	: fibSearch(_elem, e, lo, hi);
}
//二分查找A
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (lo < hi) {
		Rank mi = (lo + hi) >> 1;
		if (e < A[mi]) hi = mi;     //三种情况
		else if ( A[mi] < e) lo = mi + 1;
		else return mi;
	}
	return -1;  //查找失败
}
//二分查找B
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (1 < hi - lo) {
		Rank mi = (lo + hi) >> 1;
		(e < A[mi]) ? hi = mi : lo = mi;
	}
	return (e == A[mi]) ? lo : -1;
}
//二分查找C
template <typename T> static Rank binSearch(T * A, T const &e, Rank lo, Rank hi) {
	while (lo < hi) {
		Rank mi = (lo + hi) >> 1;
		(e < A[mi]) ? hi = mi : lo = mi + 1;
	}
	return --lo;
}
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
//排序
template <typename T> void Vector<T>::sort(Rank lo, Rank hi) {
	switch (rand() % 5) {
		case 1: bubbleSort(lo, hi); break;  //起泡排序
		case 2: selectSort(lo, hi); break;  //选择排序
		case 3: mergeSort(lo, hi); break;   //归并排序
		case 4: heapSort(lo, hi); break;    //堆排序
		case 5: quickSort(lo, hi); break;   //快速排序
	}
}
//起泡排序(改进)
template <typename T> void Vector<T>::bubbleSort(Rank lo, Rank hi) {
	while (!bubble(lo, hi--));               //扫描直至全序      
}
template <typename T> bool Vector<T>::bubble(Rank lo, Rank hi) {
	bool sorted = true;
	while (++lo < hi)
		if (_elem[lo - 1] > _elem[lo]) {
			sorted = false;
			swap(_elem[lo - 1], _elem[lo]);
		}
	return sorted;
}
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
	for (Rank i = 0, j = 0, k = 0; (j < lb) || (k < lc); ){
		if( (j < lb) && (lc <= k) || (B[j] <= C[k]) )
			A[i++] = B[j++];
		if( (k < lc) && (lb <= j) || (C[K] <= B[j]) )
			A[i++] = C[k++];
	} //循环紧凑，效率不如拆分
	delete [] B;
}
