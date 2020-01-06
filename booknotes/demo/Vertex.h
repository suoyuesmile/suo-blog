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
}