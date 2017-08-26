# 二叉树(BinTree)
> 半线性结构，二维的列表，特殊的图

### 树(tree)
- 有根树：指定任一节点r 属于 V作为根后，T即称有根树(rooted tree)
- 有序树：
- - 子树树根称孩子，同一父亲的子树之间称兄弟
- - 关系：边数 = 所有定点度数之和 = 所有顶点-1 = O（n）
- - 定义：指定孩子的顺序，称T为有序数
- 路径环路：
- - k条边依次相连，构成一条路径(path)
- - 长度：边的数目
- - 环路：其中的某个顶点短路
- 连通无环：
- - 连通图：节点之间均有路径（边数多）
- - 无环图：不含环路（边数少）
- 树与图：无环连通图，任何节点与根之间存在唯一路径，每个顶点都有了一个长度path(V)
- 深度层次：
- - 路径节点子树可以相互指代
- - 深度：depth(v) = | path(v) |
- - 祖先后代：路径上的节点均为v的祖先，v是它们的后代
- - 真祖先后代：除开自己的
- - 半线性：任一深度，祖先唯一，后代未必唯一
- - 根：所有节点的公共祖先，深度为0，无祖先
- - 叶子：没有后代的节点，出度为0
- - 高度：所有叶子深度的最大值称树的高度，空树（一个节点没有）的高度为-1

### 树的表示
- 接口：

节点 | 功能
---|---
root() | 根节点
parent() | 父节点
firstChild() | 长子
nexrSibling() | 兄弟
insert(i, e) | 第i个孩子插入
remove(i) | 删除第i个孩子
traverse() | 遍历

- 父节点实现：

rank | data | parent
---|---|---
0 | A | -1
1 | B | 0
2 | C | 0
3 | D | 0
4 | E | 1
5 | F | 1
6 | G | 3
7 | H | 6
8 | I | 6
9 | J | 6

```
//空间性能： O(n)
//时间性能
//parent(): O(1)
//root(): O(n)或O(1)
//firstChild(): O(n) //不好
//nextSibling(): O(n) //不好
```
- 子节点实现：

rank | data | children
---|---|---
0 | A | 35
1 | B | -1
2 | C | -1
3 | D | -1
4 | E | 012
5 | F | -1
6 | G | 789
7 | H | -1
8 | I | -1
9 | J | -1
```
//空间性能： O(n)
//时间性能
//parent(): O(n) //不好
//root(): O(n)或O(1)
//firstChild(): O(1) 
//nextSibling(): O(1) 
```
- 组合实现：

rank | data | parent | children
---|---|---|---
0 | A | 4 | 35
1 | B | 4 | -1
2 | C | 4 | 6
3 | D | 0 | -1
4 | E | -1 | 012
5 | F | 0 | -1
6 | G | 2 | 789
7 | H | 6 | -1
8 | I | 6 | -1
9 | J | 6 | -1
```
//空间性能： O(n)
//时间性能
//parent(): O(1) 
//root(): O(n)或O(1)
//firstChild(): O(1) 
//nextSibling(): O(1) //不好
```
- 长子兄弟法:设2个引用，纵firstChild(), 横nextSibling()

### 二叉树(binary tree):节点度数不超过2
- 左右孩子：lChild-->lSubTree,rChild-->rSubtree隐含了树的有序性
- 基数：深度为k的节点，至多2^k个，含n个节点，高度为h的二叉树 h < n < 2^(h+1)
- 满树：顶点树最大，饱和状态，宽度2^h
- 度与节点：0度叶子，1度单分支，2度双分支
- 真二叉树：所有节点度数为0或2，补全1度节点（假想策略）
- 描述二叉树:二叉树是多叉树的特例，有根有序时能力足以覆盖后者
- 多叉树化二叉树

```
1. 长子兄弟法
2. 向左45度旋转
```

### 二叉树实现
- 节点实现(BinNode)

```
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
```
- 二叉树实现接口(BinTree)

```
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
```
- 更新高度
```
template <typename T> int BinTree<T>::updateHeight( BinNodePosi(T) x ) {
	return x->height = 1 +
	max( stature(x->lChild), stature(x->rChild) );
}
template <typename T> void BinTree<T>::updateHeightAbout( BinNodePosi(T) x ) {
 	while (x) {
 		updateHeight(x);
 		x = x->parent;
 	}
}
```
- 节点插入

```
template <typename T> BinNodePosi(T) BinTree<T>::insertAsRC( BinNodePosi(T) x, T const &e){
	_size++;
	x->insertAsRC(e);
	updateHeightAbout(x);
	return x->rChild;
}
```
### 先序遍历
*不要从轮子造起，利用之前的工作*
- 按照某种次序访问，每个节点被访问恰好一次
- 遍历结果：先序，中序，后序
- 区别：局部的根节点的访问顺序

```
先序：V --> L --> R
中序：L --> V --> R
后序：L --> R --> V
//左子树总是在右子树之前
```
- 递归实现：

```
template <typename T> void traverse( BinNodePosi(T) x, VST & visit) {
	if ( !x )
		return;
	visit( x->data );   //访问根
	traverse( x->lChild, visit ); //访问左子树
	traverse( x->rChild, visit ); //访问右子树
} //O(n)渐进的
```
- 改进1(迭代)

```
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
```
- 改进2(左侧下行迭代)

```
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
```

### 中序遍历
- 递归实现

```
template <typename T, typename VST> void traverse( BinNodePosi(T) x, VST & visit) {
	if ( !x )
		return;
	traverse( x->lChild, visit ); //访问左子树O(a)
	visit( x->data );   //访问根O(1)
	traverse( x->rChild, visit ); //访问右子树O(n-1-a)
} //O(n)渐进的
```
- 改进：左侧下行迭代

```
template <typename T, typename VST> void travIn_I2( BinNodePosi(T) x, VST & visit ) {
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
}//每一个节点都只有一个入栈动作，实际只有O(n)复杂度，分摊分析，优于递归
```

### 层次遍历：借助队列

```
template <typename T, typename VST> void traverse( VST & visit) {
	Queue <BinNodePosi(T)> Q; //辅助栈
	Q.enqueue( this ); 
	while ( !Q.empty() ) {
		BinNodePosi(T) x = Q.dequeue(); //出列并访问当前节点
		visit( x->data );
		if( HasLChild( *x ) )  //左孩子先进先出
			Q.enqueue( x->lChild );
		if( HasRChild( *x ) )  //右孩子后进后出
			Q.enqueue( x->rChild );
	}
} 
```

### 重构：已知三种遍历序列其中2种还原二叉树
- 中序 + 先序/后序：数学归纳法

```
证明：
preorder:              r -> [L] -> [R]
inorder:        [L] -> r -> [R]
postorder：[L]->[R] -> r        
定位r，判断左右子树，递归实现
                A
            B      C
        D        E
                   F
先序： A  B  D  C  E  F
中序： D  B  A  E  F  C
后序： D  B  F  E  C  A
先+中
1. root:A   L:DB   R:EFC
2. root:B   L:D,  root:C , root:C  L:EF
3. root:E   R:F
后+中
1. root:A   L:DB   R:EFC
2. root:C   L:EF,  root:B  L:D 
3. root:E   R:E
//技巧，先序后序确定根，中序确定左右分支
```
- 先序 + 后序 + 真二叉树：

```
                A
            B      C
           D E    F G
                   H I
先序： A  B  D  E  C  F  G  H  I
后序： D  E  B  F  H  I  G  C  A
1. root: A   L: BDE    R:CFGHI
2. root: B   L: D      R:E, root:C   L:F    R:GHI
3. root: G   L: H      R:I
```
