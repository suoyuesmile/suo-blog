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
template <typename Tv, typename Te> void Graph<Tv, te>::BFS(int v, int &clock) {
	Queue<int> Q;
	status(v) = DISC
}