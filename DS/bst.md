# 二叉搜索树
### 概述
- 循关键码访问call by key： 关键码之间可以比较，比对
- 词条entity： key - value
- 比较器：重载操纵符实现
- 判等器：重载操纵符实现
- Binary Search Tree: 节点 ~ 词条 ~ 关键码， 处处满足顺序性
- 顺序性：任意节点均不小于左后代，不大于右后代
- 单调性：中序遍历，必然单调非降，充要性
- 宏微观：微观满足顺序性，宏观满足单调性

```
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
```
### BST : 查找、插入、删除、平衡
#### 查找
- 策略：减而治之，仿照二分查找策略

```
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
```
- 接口语义：返回值的引用值
- - 成功时，指向一个关键码为e且真实存在的节点, 失败时，指向试图转向的空节点NULL
- - 增加哨兵，失败时，将此空节点转换为一个关键码为e且真实存在的节点

#### 插入
- 策略：在查找的基础上替换失败的空节点

```
//BST插入
template <typename T> BinNodePosi(T) BST<T>:: insert(const T & e) {
	BinNodePosi(T) & x = search( e ); //查找目标
	if( !x ) { //禁止雷同，失败时才插入操作
		x = new BinNode<T>(e, _hot); //创建新节点以hot为父亲
		_size++;
		updataHeightAbove(x); //更新全树规模，并更新历代祖先规模
	}
	return x; //无论e是否存在原树中，总有x->data == e
} //总体复杂度O(h)
```
#### 删除
- 策略：先确认目标再删除
```
template <typename T> bool BST<T>:: remove( const T & e) {
	BinNodePosi(T) & x = search( e ); //定位目标
	if(!x) return false; //确认目标存在
	removeAt(x , _hot); //分两大类实施 删除
	_size--; //更新规模
	updataHeightAbove( _hot );
	return true;
} //复杂度O(h)
```
- 情况一

```
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
		return succ; 返回接替者
	}
}
```
- 情况二

```
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
	}//O(h)
```
#### 平衡与等价
> BST的查找，插入，删除复杂度都为O(h)，但是高度不能很好控制，效率并不理想

- 生成BST：随机生成的高度为O(logn)，有重复的组合，随机组合的BST生成的O(n^1/2)
- 理想平衡：节点数固定，兄弟子树高度越接近(平衡)，全树倾向更低
- 由n个节点组成的二叉树，高度不低于logn时-----恰为logn为理想平衡树，概率低，适当降低标准
- 退一步海阔天空：高度渐进不超过O(logn)
- 适度平衡的二叉树，称平衡二叉树BBST

- 非平衡二叉树等价平衡二叉树
- 中序遍历的歧义性：拓扑结构不同，中序遍历相同
- 等价BST：3个规律，上下可变，左右不能乱，旋转变换
- zig变换（旋转调整）
- 准则：局部性（常数节点数），操作数至多O(logn)

### AVL : 重平衡、插入、删除、重构
- 平衡因子：balFac(V) = height( lc(v) ) - height( rc(v) )
- G.Adelson-Velsky & E.Landis (1962) 所有 | balFac | <= 1
- AVL = 适度平衡：高度为h的AVL树，至少包含S(h) = fib(h+3) -1个节点
- 接口：
```
#define Balance(x) ( stature( (x).lChild ) == stature( (x).rChild ) )
#define BalFac(x) ( stature( (x).lChild ) - stature( (x).rChild ) )
#define AvlBalanced(x) ( ( -2 < BalFac(x) ) && ( BalFac(x) < 2 ) )
template <typename T> class AVL: public BST<T> {
	public:
		BinNodePosi(T) insert( const T &); //插入重写
		bool remove( const T &); //删除重写
}
```

- 插入节点会导致祖先发生失衡，删除后只有一个节点失衡，相反插入操作更简单
- 插入：单旋 ，g经过单旋后复衡，子树高度复原，更高祖先也必平衡，全树复衡
- 时间：旋转O(1) 一致向右zagzag，一致向左zigzig，双旋，zigzag和zagzig情况

```
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
```
- 删除
