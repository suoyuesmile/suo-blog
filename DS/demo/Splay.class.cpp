template <typename T> class Splay : public BST<T> {
protected: 
	BinNodePosi(T) splay( BinNodePosi(T) v); //将v伸展至根
public: //伸展树的查找也会引起整数的结构
	BinNodePosi(T) & search( const T & e); //查找
	BinNodePosi(T) insert( cosnt T & e); //插入
	bool remove( const T & e); //删除
};
