#include <stdio.h>
int main(){
	int n = 2147483647;
	float f =  1e+20;
	float f1 = -f;
	printf("n = %d, n+1 = %d\n", n, n+1);
	printf("f = %f, f+1 = %f\n", f, f+1);
	printf("f1 = %f, f1+1 = %f\n", f1, f1-1);
	return 0;
}