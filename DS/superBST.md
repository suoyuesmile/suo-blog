# 高级搜索树
### 伸展树
#### 伸展树
- 局部性：刚被访问的数据，极有可能很快的再次被访问，这一现象在信息处理过程中屡见不鲜
- 连续m次查找( m >>n = | BST | ) 时间 O（mlogn）
- 逐层伸展：使用zig，zag操作，节点一旦被访问，随即转移至树根，一步一步往上爬，自下而上，逐层单旋 
- 最坏情况：旋转次数n，每个周期累计最坏n^2,分摊n^2

#### 双层伸展
- 构思精髓：向上追溯两层，而非一层
- 反复考察祖孙三代：g = parent(p), p = parent(v), v
- 根据它们的相对位置，经两次旋转使得v上升两层，成为子树根
- zig-zag/zag-zig：等效AVL双旋
- zig-zig/zag-zag：从祖父开始旋转，旋转两次

#### 实现

```
template <typename T> class Splay : public BST<T> {
protected: 
	BinNodePosi(T) splay( BinNodePosi(T) v); //将v伸展至根
public: //伸展树的查找也会引起整数的结构
	BinNodePosi(T) & search( const T & e); //查找
	BinNodePosi(T) insert( cosnt T & e); //插入
	bool remove( const T & e); //删除
};

```
### B-树
#### 动机：实现高效的IO
> 越来越小的内存   
> 物理上，容量越大，访问速度越小   

- 高速缓存
- - 事实1：不同容量存储器，访问速度差异大 磁盘与内存 ms/ns > 10^5, 一秒之于一天
- - 事实2：从磁盘中读入1B，与读写1KB几乎一样快，习惯式批量式访问，以页和块为单位

#### B树
- 特征：不限于2个孩子，底层都位于同一高度，又宽又矮
- 定义：多路搜索树，适当合并，每2代合并4路。d代合并m = 2^d路，m-1个关键码
- 逻辑：与BBST完全等价
- 应用：多级存储系统中使用B树，可针对外部查找，大大减少I/O次数
- 原理：充分利用外存对批量访问的高效支持，每下降一层，都以超级节点为单位，读入一组关键码
- 具体：视磁盘的数据块大小而定而定，m = key/pg, m = 200 ~ 300
- 结构：m阶B树，m路平衡搜索树(m >= 2), 外部节点的深度统一相等，叶节点的深度统一相等
- 阶数：内部节点各有，不超过m-1个关键码，不超过m个分支，内部节点的分支数n+1也不能太少，树根 2<= n+1
- 表示：紧凑表示，将引用表示成一个点，省略掉外部节点

#### 实现
### 红黑树
#### 动机
- 一致性结构
- - Persistent structure:支持对历史版本的访问

```
T.search(ver, key);
T.insert(ver, key);
T.remove(ver, key);
```
- - 蛮力实现：每个版本独立保存，各个版本入口自成一个搜索结构
- - 单次操作O(logn+logn),累计O(h+n)时间空间
- - 优化：复杂度控制在O(n * logn)
- - 重构：大量共享，少量更新：每个版本的新增复杂度，仅为O(logn)
- - 结论: 相邻版本的差异不超过O(1)
- - 需要：任何动态操作都控制在O(1)范围内

#### 红黑树
- 由红黑两类节点组成的BST
- 统一增设外部节点，使之为真二叉树
- 定义：
- - 树根：必为黑色
- - 外部节点：均为黑色
- - 其余节点：若为红，只有黑孩子，红之子父都为黑
- - 外部节点到根：途中黑节点数目相等
- (2, 4)树 == 红黑树
- - 提升各红节点，使之与黑父亲等高--于是每课红黑树，都对应一颗(2,4)树
- - 将黑节点与其红孩子视作超级节点
- - 无非四种组合，分别对应4阶B树的一类内部节点
- 红黑树属于BBST
- - 由等价性，既然B树是平衡的，红黑树自然也是
- - 证明：

#### 实现

```
template <typename T> class RedBlack: public BST<T> {
	public: 
		BinNodePosi(T) insert( const T & e); //插入重写
		bool remove( const T % e); // 删除重写
	protected:
		void solveDoubleRed( BinNodePosi(T) x); //双红修正
		void solveDoubleBlack( BinNodePosi(T) x); //双黑修正
		int updateHeight( BinNodePosi(T) x); //更新节点高度
}
```