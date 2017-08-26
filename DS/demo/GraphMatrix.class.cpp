template <typename Te, typename Tv> class GraphMatrix : public Graph<Tv, Te> {
	private:
		Vector< Vertex<Tv> > V;   //顶点集
		Vector< Vector< Edge<Te>* > > E;    //边集
	public:
		//构造与析构
		GraphMatrix() { n = e = 0;}
		~GraphMatrix() {
			for (int j = 0; j < n; ++j)
				for (int k = 0; k < n; ++k)
					delete E[j][k];
		}
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
};
