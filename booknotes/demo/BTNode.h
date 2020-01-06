template <typename T> struct BTNode {
	BTNodePosi(T) parent; //父
	Vector<T> key; //数值向量
	Vector< BTNodePosi(T) > child; //孩子向量
	BTNode() { parent = NULL; child.insert(0, NULL); }
	BTNode( T e, BTNodePosi(T) lc = NULL, BTNodePosi(T) rc = NULL) {
		parent = NULL; //根节点
		key.insert( 0, e ); //仅一个关键码，以及两个孩子
		child.insert( 0, lc );
		child.insert( 1, rc );
		if( lc ) lc->parent = this;
		if( rc ) rc->parent = this;
	}
}