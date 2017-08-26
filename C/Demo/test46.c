#include <stdio.h>
#define LEN 8
int main(){
	double a[LEN], b[LEN], tem = 0;
	int i;
	for (i = 0; i < LEN; ++i)
	{
		printf("Enter a double is NO%d:", i+1);
		scanf("%lf", &a[i]);
		tem += a[i];
		b[i] = tem;                  //灵活使用临时变量
	}
	i = 0; 
	while(i++ < LEN)
	{
		printf("%.2lf ", a[i-1]);
	}
	i = 0; 
	printf("\n");
	while(i++ < LEN)
	{
		printf("%.2lf ", b[i-1]);
	}
	printf("\n");
	return 0;
}