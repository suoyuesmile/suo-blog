# 图(Graph)
### 概述
- 邻接：邻接关系，顶点与顶点的关系
- 关联：关联关系，顶点与边的关系
- 无向图：次序无所谓
- 有向图（digraph）：有次序，起点尾（tail），终点头 （head）
- 路径(path)：一系列的顶点按照依次邻接的关系构成序列
- 简单路径：不含重复节点的路径
- 环路(cicle)：起点终点重合的路径
- 无环路(DAG)：不包含任何环路的图
- 欧哈路：覆盖所有的点
- 哈密尔顿：覆盖所有点，每个顶点有且仅经过一次

### 邻接矩阵（adjacency matrix）
- 接口

```
template <typename Tv, typename Te> class Graph {
	private:
		void reset() {
			for (int i = 0; i < n; ++i){ //顶点
				status(i) = UNDISCOVERED;
				dTime(i) = fTime(i) = -1;
				parent(i) = -1;
				priority(i) = INT_MAX;
				for (int j = 0; j < n; j++) //边
					if (exists(i, j))
						status(i, j) = UNDETERMINED;
			}
		}
	public:	
};
```
- 顶点的实现（Vertex）：邻接矩阵

```
typedef enum { UNDISCOVERED, DISCOVERED, VISITED} VStatus;
template <typename Tv> struct Vertex {
	Tc data; //数据
	int inDegree, outDegree; //入度出度
	VStatus status; //状态
	int dTime, fTime; //时间标签
	int parent;  //父节点
	int priority;  //优先级
	Vertex( Tv const & d) :  //构造初始化新顶点
	data(d), inDegree(0), outDegree(0), 
	status(UNDISCOVERED), dTime(-1),
	 fTime(-1), priority(INT_MAX) {}
};
```
- 边的实现（Edge）：

```
typedef enum { UNDETERMINED, TREE, CROSS, FORWORD, BACKWAED } EStatus;
template <typename Te> struct Edge {
	Te data;  //数据
	int weight;  //权重
	EStatus status;  //类型
	Edge( Te const & d, int w ):data(d), weight(w), status(UNDETERMINED) {} 
};
```
- 图的实现(GraphMatrix)：利用向量和邻接矩阵实现，适用稠密图，效率高

```
template <typename Te, typename Tv> class GraphMatrix : public Graph<Tv, Te> {
	private:
		Vector< Vertex<Tv> > V;   //顶点集
		Vector< Vector< Edge<Te>* > > E;    //边集
	public:
		GraphMatrix() { n = e = 0;}
		~GraphMatrix() {
			for (int j = 0; j < n; ++j)
				for (int k = 0; k < n; ++k)
					delete E[j][k];
		}
};
```
- 顶点操作

```
//顶点操作	
Tv & Vertex(int i) { return V[i].data }
//...
//枚举邻接顶点，逆序查找
int NextNbr(int i, int j) {
	while ( (-1 < j) && !exists(i, --j) )
		;
	return j;
}
int firstNbr(int i) {
	return NextNbr(i, n);
}
//顶点插入
int insert(Tv const & vertex) {
	for (int i = 0; i < n; ++i)
		E[j].insert(NULL);
	n++;
	E.insert( Vector< Edge<Te>* >( n, n, NULL) );
	return V.insert( Vertex<Tv>(vertex) ); 
}
//顶点删除
Tv remove(int i) {
	for (int i = 0; i < n; ++i)
		if(exists(i, j)){
			delete E[i][j];
			V[j].inDegree--;
		}
	E.remove(i);
	n--;
	for (int j = 0; j < n; j++)
		if ( exists(j ,i) ){
			delete E[j].remove(i);
			V[j].outDegree--;
		}
	Tv vBak = vertex(i);
	V.remove(i);
	return vBak;
}

```
- 边操作

```
//边操作
bool exists(int i, int j) {
	return (0 <= i) && (i < n) && (0 <= j) && (j < n) && E[i][j] != NULL;
}
Te & edge(int i, int j) {
	return E[i][j]->data;
}
//...
//边插入
void insert( Te const& edge, int w, int i, int j) {
	if( exists(i, j) )
		return ;    //忽略已有的边
	E[i][j] = new Edge<Te>(edge, w); //创建新边
	e++;  //更新信息
	V[i].outDegree++;
	V[i].inDegree++;
}
//边删除
Te remove(int i, int j) {
	Te eBak = edge(i, j);
	delete E[i][j];
	E[i][j] = NULL;
	e--;
	V[i].outDegree--;
	V[j].inDegree--;
	return eBak;
}
```
### 广度优先搜索（BF-Search）
> 化繁为简：遍历（图->树）

- 算法：
```
1. 访问顶点s
2. 访问s所有尚未访问的邻接顶点
3. 依次访问它们尚未访问的邻接顶点
4. 如此反复
实际上：树的层次遍历
```
- 图示：

```
            
            a     
          / | \ 
         s  |  e
        / \ |  | \    遍历前
       d    c  |  f      
        \ /    | /
         b-----g
            a
          /   \ 
         s     e
        / \    | \    遍历后
       d    c  |  f    
          /    | 
         b     g
    队列 s->a->c->d->e->b->f->g
    
    
```
- 实现：
```
//练习
```

### 深度优先搜索(DF-Search)
- 算法：

```
1. 访问顶点s
2. 尚有未被访问的邻居，任取其一u，递归执行DFS(u),否则返回
```
- 图示:

```
            j
            |
        i---g---h
        | /   \ |
        d   e   f
        | / |   |
        a --b---c
        
            j
            |
        i---g---h
        |       |
        d   e   f
            |   |
        a --b---c
    队列: a->b->c->f->h->g->j->i->d->e
```
- 实现：

```
//练习
```