template <typename T> class BST: public public BinTree<T> {
	public: //二叉树派生
		virtual BinNodePosi(T) & search( const T &) ; //查找
		virtual BinNodePosi(T)  insert( const T &) ;  //插入
		virtual bool  remove( const T &) ;			  //删除
	protected:
		BinNodePosi(T) _hot; //命中节点的父亲
		BinNodePosi(T) connect34(BinNodePosi(T), BinNodePosi(T),  //3+4重构
			BinNodePosi(T), BinNodePosi(T), BinNodePosi(T), 
			BinNodePosi(T), BinNodePosi(T));
		BinNodePosi(T) rotateAt( BinNodePosi(T) ); //旋转
}

//BST查找
template <typename T> BinNodePosi(T) & BST<T>::search(const T & e) {
	return searchIn( _root, e, _hot = NULL) ;
}
//典型的尾递归，当前树根目标关键码，记忆热点
static BinNodePosi(T) &  searchIn(BinNodePosi(T) & v,  const T & e, BinNodePosi(T) & hot ) {
	if( !v || (e == v->data) ) //确定失败，成功，或者
		return v;
	hot = v; //记下当前节点，然后。。
	return searchIn( ( (e < v->data ) ? v->lchild : v->rchild ) , e, hot);
} //运行时间正比于返回节点的深度

//BST插入
template <typename T> BinNodePosi(T) BST<T>:: insert(const T & e) {
	BinNodePosi(T) & x = search( e ); //查找目标
	if( !x ) { //禁止雷同，失败时才插入操作
		x = new BinNode<T>(e, _hot); //创建新节点以hot为父亲
		_size++;
		updataHeightAbove(x); //更新全树规模，并更新历代祖先规模
	}
	return x; //无论e是否存在原树中，总有x->data == e
}
//BST删除
template <typename T> bool BST<T>:: remove( const T & e) {
	BinNodePosi(T) & x = search( e ); //定位目标
	if(!x) return false; //确认目标存在
	removeAt(x , _hot); //分两大类实施 删除
	_size--; //更新规模
	updataHeightAbove( _hot );
	return true;
} //复杂度O(n)
//情况一
template <typename T> static BinNodePosi(T) removeAt(BinNodePosi(T) & x, BinNodePosi(T) & hot){
	BinNodePosi(T) w = x; //实际被摘除的节点
	BinNodePosi(T) succ = NULL; //实际被删除的节点的接替者
	if( ! HasLchild(*x) ) succ = x = x->rchild; //左子树为空
	else if( ! HasRchild(*x) ) succ = x = x->lchild; //右子树为空
	else { //左右并存的状况
		hot = w->parent;
		if( succ ) succ->parent = hot;
		release( w->data ); //释放被摘除的节点
		release( w );
		return succ; //返回接替者
	}
}
//化繁为简
template <typename T> static BinNodePosi(T) removeAt( BinNodePosi(T) &x, BinNodePosi(T) & hot ) {
	BinNodePosi(T) w = x; //实际被摘除的节点
	BinNodePosi(T) succ = NULL; //实际被删除的节点的接替者
	if( ! HasLchild(*x) ) succ = x = x->rchild; //左子树为空
	else if( ! HasRchild(*x) ) succ = x = x->lchild; //右子树为空
	else {
		w = w->succ;
		swap( x->data, w->data);
		BinNodePosi(T) u = w->parent;
		( u == x ? u->rChild : u->lChild ) = succ = w->rChild;
	}
} //O(h)