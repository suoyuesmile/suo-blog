#include <stdio.h>
int main(){
	int a, b;
	printf("Enter lower and upper integer limits:");
	scanf("%d%d", &a, &b);
	while( a < b ){
		printf("The sums of the squares from %d to %d is %d\n", a*a, b*b, a*a+b*b);
		printf("Enter next set of limits:");
		scanf("%d%d", &a, &b);
	}
	printf("done!\n");
	return 0;
}