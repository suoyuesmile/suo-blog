#include <stdio.h>
int main(){
	int n, count = 0, sum = 0;
	printf("please input n:");
	scanf("%d" ,&n);
	while( count++ < n){
		sum += count * count;
	}
	printf("sum = %d\n", sum);
	return 0;
}