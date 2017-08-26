#include <iostream>
//递归
int fib(int n){
	return (2 > n) ? n : fib(n-1) + fib(n-2);
}
//迭代
int fib2(int n){
	int f = 0, g = 1;
	while(0 < n--){
		g = g + f;
		f = g - f; 
	}
	return g;
}
int main(void){
	// std:: cout << fib(64) << std:: endl;
	std:: cout << fib2(64) << std:: endl;
	return 0;
}