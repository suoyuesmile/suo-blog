template <typename T> struct PQ{
	virtual void insert(T) = 0; //按优先级插入词条
	virtual T getMax() = 0; //取出优先级最高的词条
	virtual T delMax() = 0; //删除优先级最高的词条
}; //与其说是PQ是数据结构，不如说是ADT。根据不同的实现方式，适用于不同的场合
#define Parent(i) ( (i-1) >> 1 ) 
#define LChild(i) ( 1 + ( ( i ) << 1 ) ) //奇数
#define RChild(i) ( ( 1 + (i) ) << 1 ) //偶数