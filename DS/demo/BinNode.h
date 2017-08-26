#define BinNodePosi(T) BinNode<T>*
template <typename T> struct BinNode {
	BinNodePosi(T) parent, lChild, rChild; //父亲孩子
	T data; //数据
	int height; //高度
	int size(); //规模
	BinNodePosi(T) insertAsLc(T const &); //插入左子
	BinNodePosi(T) insertAsRc(T const &); //插入右子
	BinNodePosi(T) succ(); //（中序）后继
	template <typename VST> void travLevel( VST & ); //层次遍历
	template <typename VST> void travIn( VST & ); //中序遍历
	template <typename VST> void travPost( VST & ); //后序遍历
} //O(1)
//插入左子
template <typename T> BinNodePosi(T) BinNode<T>::insertAsLc(T const &) {
	return lChild = new BinNode( e, this);
}
//插入右子
template <typename T> BinNodePosi(T) BinNode<T>::insertAsRc(T const &) {
	return rChild = new BinNode( e, this);
}//O(1)
//规模
template <typename T> int BinNode<T>::size() {
	int s = 1;
	if (lChild) 
		s += lChild->size();
	if (rChild)
		s += rChild->size();
	return s;
}//O(n)