#define Post(T) ListNode<T>*
#define sPost(T) sListNode<T>*
template <typename T> struct ListNode {  //完全开放，不再过度封装
	T data;   //数值
	Post(T) pred;  //前驱
	Post(T) succ;  //后继
	ListNode() {}  //针对header和trailer的构造
	ListNode(T e, Posi(T) p = NULL, Post(T) s = NULL) : data(e), pred(p), succ(s) {} //默认构造
	Posi(T) insertAsPred(T const & e); //前插入
	Posi(T) insertAsSucc(T const & e); //后插入
}
template <typename T> struct sListNode {  //完全开放，不再过度封装
	T data;   //数值
	Post(T) next;  //后继
	ListNode() {}  //针对header和trailer的构造
	ListNode(T e, Posi(T) p = NULL, Post(T) s = NULL) : data(e), pred(p), succ(s) {} //默认构造
	Posi(T) insertAsPred(T const & e); //前插入
	Posi(T) insertAsSucc(T const & e); //后插入
}