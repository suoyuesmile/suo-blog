#define Balance(x) ( stature( (x).lChild ) == stature( (x).rChild ) )
#define BalFac(x) ( stature( (x).lChild ) - stature( (x).rChild ) )
#define AvlBalanced(x) ( ( -2 < BalFac(x) ) && ( BalFac(x) < 2 ) )
template <typename T> class AVL: public BST<T> {
	public:
		BinNodePosi(T) insert( const T &); //插入重写
		bool remove( const T &); //删除重写
}
//插入
template <typename T> BinNodePosi(T) AVL<T>::insert( const T & e) {
	BinNodePosi(T) & x = search( e ); 
	if( x ) return x;
	x = new BinNode<T>( e, _hot );
	_size++;
	BinNodePosi(T) xx = x;
	for ( BinNodePosi(T) g = x->parenr; g; g = g->parent )
		if ( !AvlBalanced( *g ) ) {
			FromParentIo( *g ) = rotateAt( tallerChild( tallerChild(g) ) );
			break;
		}else
		updateHeight( g );
	return xx;
}