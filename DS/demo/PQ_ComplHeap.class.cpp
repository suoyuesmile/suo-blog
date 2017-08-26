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