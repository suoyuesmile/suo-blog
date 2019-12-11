#include <stdio.h>
void swap(int *, int *);
int main(void){
	int a = 1, b =2;
	swap(&a, &b);
	printf("%d, %d\n", a, b);
	return 0;
}
void swap(int *p, int * q){
	int temp;
	temp = *p;
	*p = *q;
	*q = temp;
}