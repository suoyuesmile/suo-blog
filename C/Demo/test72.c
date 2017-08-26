#include <stdio.h>
int fibonacciRec(int); //递归
int fibonacci(int);    //非递归
int main(void){
	int n;
	scanf("%d", &n);
	printf("%d\n", fibonacciRec(n) );
	printf("%d\n", fibonacci(n) );
	return 0;
}
int fibonacciRec(int n){
	if(n == 1 || n == 2)
		return 1;
	else
		return fibonacciRec(n-1) + fibonacciRec(n-2);
}
int fibonacci(int n){
	int i, fib1 = 1, fib2 = 1;
	if( n == 1 || n == 2)
		return 1;
	for(i = 3 ; i <= n; i++){
		fib2 = fib1 + fib2;
		fib1 = fib2 - fib1; 
	}
	return fib2;
}