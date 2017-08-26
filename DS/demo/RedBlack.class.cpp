template <typename T> class RedBlack: public BST<T> {
	public: 
		BinNodePosi(T) insert( const T & e); //插入重写
		bool remove( const T % e); // 删除重写
	protected:
		void solveDoubleRed( BinNodePosi(T) x); //双红修正
		void solveDoubleBlack( BinNodePosi(T) x); //双黑修正
		int updateHeight( BinNodePosi(T) x); //更新节点高度
}