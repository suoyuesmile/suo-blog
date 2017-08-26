template <typename T> void Verctor<T>::quickSort( Rank lo, Rank hi) {
	if( hi - lo < 2) return 0; //平凡解
	Rank mi = partition( lo, hi-1 ); //先构造轴点
	quickSort(lo, mi); //前缀排序
	quickSort(mi+1, hi); //后缀排序
}
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