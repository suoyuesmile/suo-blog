typedef enum { UNDETERMINED, TREE, CROSS, FORWORD, BACKWAED } EStatus;
template <typename Te> struct Edge {
	Te data;  //数据
	int weight;  //权重
	EStatus status;  //类型
	Edge( Te const & d, int w ):data(d), weight(w), status(UNDETERMINED) {} 
};