typedef *Node<T> node(T);
template <typename T> struct Node {
	T data;
	node(T) next; 
}