#include <stdio.h>
#define SIZE 10
int main(){
	short a[SIZE] = {1,2,3,4,5,6,7,8,9,10};
	double b[SIZE] = {1,2,3,4,5,6,7,8,9,10};
	short i, *pa = a;
	double *pb = b;
	for (i = 0; i < 2; ++i)
	{
		printf("pa%d point %p\n", i, pa++);
	}	
	for (i = 0; i < 2; ++i)
	{
		printf("pb%d point %p\n", i, pb++);
	}
}
// pa0 point 0060FF00
// pa1 point 0060FF02

// pb0 point 0060FEB0
// pb1 point 0060FEB8
