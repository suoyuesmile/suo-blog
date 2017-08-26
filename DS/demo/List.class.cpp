#include "ListNode.h"
template <typename T> class List {
private:
	int _size;
	Posi(T) header;  //头元素（不可见）
	Posi(T) trailer; //末元素（不可见）
protected:
	//内部函数
public:
	//构造函数
	//析构函数
	//只读接口
	//可写接口
	//遍历接口
};
//构造函数 规模为0
template <typename T> void List<T>::init() {
	header = new ListNode<T>;
	trailer = new ListNode<T>;
	header->succ = trailer;
	header->pred = NULL;
	trailer->pred = header;
	trailer->succ = NULL;
	_size = 0;
}
//访问
template <typename T> T List<T>::operator[](Rank r) const {
	Posi(T) p = first();
	while(0 < r--)
		p = p->succ; //顺数第r个节点
	return p->data;  //目标节点 
}
// 效率低下O(n)，难以接受
//查找
template <typename T> Posi(T) List<T>::find(T const &e, int n, Posi(n) p) const {
	while (0 < n--)      //列表逆向扫描
		if (e == ( p = p->pred )->data )
			return p;
	return NULL; 
}
//插入
template <typename T> Posi(T) List<T>::insertBefore(Posi(T) p, T const & e) {   //O(1)
	_size++;
	return p->insertAsPred(e);  //e当作前驱插入
}
template <typename T> Posi(T) ListNode<T>::insertAsPred(T const & e) {
	Posi(T) x = new ListNode(e, pred, this); //创建
	pred->succ = x;                          //建立连接
	pred = x;
	return x;
}
//基于复制的构造
template <typename T> void List<T>::copyNodes(Posi(T) p, int n) {  //O(n)
	init();  //创建头尾节点初始化
	while (n--) {  //自p的n下依次作为末节点插入
		insertAsLast(p->data);
		p = p->succ;
	}
}
//删除
template <typename T> T List<T>::remove(Posi(T) p) {  //O(1)
	T e = p->data;     //备份待删除的数值
	p->pred->succ = p->succ; //跳过p
	p->succ->pred = p->pred; //对称
	delete p;
	_size--;
	return e;          //返回数值
}
//析构
template <typename T> List<T>::~List() {
	clear();          //清空列表
	delete header;    //释放头
	delete trailer;   //释放尾
}
template <typename T> int List<T>::clear() {
	int oldSize = _size;
	while(0 < _size)
		remove(header->succ); //反复删除首节点
	return oldSize;
}  //O(n)
//无序向量唯一化
template <typename T> int List<T>::deduplicate() {
	if (_size < 2)    //平凡列表自然无重复
		return 0;     
	int oldSize = _size;  //记录原规模
	Posi(T) p = first();
	Rank r = 1;           //p从首节点开始
	while ( trailer != ( p = p->succ ) ) {  //依次到末节点
		Posi(T) q = find(p->data, r, p);    //从前驱中查找雷同的
		q ? remove(q) : r++;                //若存在删除，否则秩递增
	}
	return oldSize - _size;                 //列表规模变化，等于删除的元素
}
//有序向量唯一化
template <typename T> int List<T>::uniquify() { 
	if(_size < 2)
		return 0;
	int ordSize = _size;   //原始规模
	ListNodePosi(T) p = first(); 
	ListNodePosi(T) q;
	while ( trailer != ( q = p->succ ) ) //遍历
		if ( p->data != q->data )  //不同
			p = q;  //连接
		else
			remove(q); //雷同删除
	return oldSize - _size;
} //O(n)
//查找
template <typename T> Posi(T) List<T>::search(T const &e, int n, Posi(T) p) const {
	while ( 0 <= n-- )  //从右往左扫描，发现下于即命中
		if ( ( (  p = p->pred )->data ) <= e ) break;
	return p;
}
//选择排序
template <typename T> void List<T>::selectionSort(Posi(T) p, int n) {
	Posi(T) head = p->pred;   //待排区间
	Posi(T) tail = p;
	for (int i = 0; i < n; ++i)
	{
		tail = tail->succ;   
	}
	while (1 < n) {          //反复从待排区间找出最大的移至有序区间前端
		insertBefore( tail, remove( selectMax(head->succ), n) );
		tail = tail->pred;
		n--;
	}
}
template <typename T> Posi(T) List<T>::selectMax(Posi(T) p, int n) {
	Posi(T) max = p;
	for (Posi(T) cur = p; 1 < n; n--) {
		if ( !lt ( (cur = cur->succ )->data, max->data) )
			max = cur;
	return max;   //返回最大节点位置
	}
}