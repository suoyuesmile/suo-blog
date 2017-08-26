template <typename T> class Stack :public Vector<T> {
	public:
		void push(T const & e) { insert(size(), e); } //入栈
		T pop() { return remove( size() -1 ); }   //出栈
		T & top() { return (*this)[ size() - 1]; }  //取顶
};