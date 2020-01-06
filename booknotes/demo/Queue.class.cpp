template <typename T> class Queue : public List<T>{
	public:
		void enqueue(T const &e) { insertAsLast(e); } //入队
		T dequeue() { return remove( first() ); } //出队
		T & front() { return first()->data; } //队首
};