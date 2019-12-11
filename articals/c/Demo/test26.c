#include <stdio.h>
int main(){
	int n, max;
	printf("please input a intege:");
	scanf("%d", &n);
	max = n + 10;
	while( n++ < max ){
		printf("%d ", n);
	}
	return 0;
}