#define stature ((p) ? (p)->height : -1)
template <typename T> class BinTree {
	protected:
		int _size; //规模
		BinNodePosi(T) _root; //根节点
		virtual int updateHeight( BinNodePosi(T) x );
		void updateHeightAbout( BinNodePosi(T) x );
	public:
		int size() const { return _size; }
		bool empty() const { return _root; }
		BinNodePosi(T) root() const { return _root; }
		//接入删除分离
		//遍历
}
//更新高度
template <typename T> int BinTree<T>::updateHeight( BinNodePosi(T) x ) {
	return x->height = 1 +
	max( stature(x->lChild), stature(x->rChild) );
}
//更新祖先高度
template <typename T> void BinTree<T>::updateHeightAbout( BinNodePosi(T) x ) {
 	while (x) {
 		updateHeight(x);
 		x = x->parent;
 	}
}
//接入
template <typename T> BinNodePosi(T) BinTree<T>::insertAsRC( BinNodePosi(T) x, T const &e){
	_size++;
	x->insertAsRC(e);
	updateHeightAbout(x);
	return x->rChild;
}
//先序遍历(递归)
template <typename T, typename VST> void traverse( BinNodePosi(T) x, VST & visit) {
	if ( !x )
		return;
	visit( x->data );   //访问根O(1)
	traverse( x->lChild, visit ); //访问左子树O(a)
	traverse( x->rChild, visit ); //访问右子树O(n-1-a)
} //O(n)渐进的
//改进1(迭代)
template <typename T, typename VST> void travPre_I1( BinNodePosi(T) x, VST & visit) {
	Stack <BinNodePosi(T)> S; //辅助栈
	if ( x )   //根入栈
		S.push(x); 
	while ( !S.empty() ) {
		x = S.pop(); //出栈并访问当前节点
		visit( x->data );
		if( HasRChild( *x ) )  //右孩子先进后出
			S.push( x->rChild );
		if( HasLChild( *x ) )  //左孩子先出后进
			S.push( x->lChild );
	}
} //无法推广
//改进2(迭代)
template <typename T, typename VST> void travPre_I2( BinNodePosi(T) x, VST & visit ) {
	Stack <BinNodePosi(T)> S;  //辅助栈
	while (true) {             //以右子树为单位，逐批访问节点
		visitAlongLeftBranch(x, visit, S);
		if( S.empty() )        //栈空即退出
			break;
		x = S.pop();           //弹出下一个子树的根
	} //pop = push = visit = O(n) = 分摊O(1)
}
template <typename T, typename VST> 
static void visitAlongLeftBranch( BinNodePosi(T) x, VST & visit, Stack<BinNodePosi(T)> & S) {
	while (x) {
		visit( x->data );
		S->pash( x->rChild );  //右孩子入栈
		x = x->lChild;         //沿左侧下行
	}
}
//中序遍历(递归)
template <typename T, typename VST> void traverse( BinNodePosi(T) x, VST & visit) {
	if ( !x )
		return;
	traverse( x->lChild, visit ); //访问左子树O(a)
	visit( x->data );   //访问根O(1)
	traverse( x->rChild, visit ); //访问右子树O(n-1-a)
} //O(n)渐进的
//中序遍历(改进)
template <typename T, typename VST> void travPre_I2( BinNodePosi(T) x, VST & visit ) {
	Stack <BinNodePosi(T)> S;  //辅助栈
	while (true) {             //以右子树为单位，逐批访问节点
		goAlongLeftBranch(x, visit, S);
		if( S.empty() )        //栈空即退出
			break;
		x = S.pop();
		visit( x->data );      //立即访问
		x = x->rChild;         //转向右子树
	} //pop = push = visit = O(n) = 分摊O(1)
}
template <typename T, typename VST> 
static void goAlongLeftBranch( BinNodePosi(T) x, VST & visit, Stack<BinNodePosi(T)> & S) {
	while (x) {
		S->pash( x->rChild );  //右孩子入栈
		x = x->lChild;         //沿左侧下行
	}
}
//层次遍历
template <typename T, typename VST> void traverse( VST & visit) {
	Queue <BinNodePosi(T)> Q; //辅助栈
	Q.enqueue( this ); 
	while ( !Q.empty() ) {
		BinNodePosi(T) x = Q.dequeue(); //出栈并访问当前节点
		visit( x->data );
		if( HasLChild( *x ) )  //左孩子先进先出
			Q.enqueue( x->lChild );
		if( HasRChild( *x ) )  //右孩子后进后出
			Q.enqueue( x->rChild );
	}
} 
