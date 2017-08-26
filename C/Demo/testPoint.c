#include <stdio.h>
int arr(int);
int main(void){
	int (* p)(int);
	p = arr;
	printf("%p,%p\n", p, arr);
	return 0;
}
int arr(int n){
	return n;
}
//00401499,00401499