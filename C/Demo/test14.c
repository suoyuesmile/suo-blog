#include <stdio.h>
#define WATER_W 3.0e-23
#define KATUO_W 950
int main(){
	float n;
	printf("please input kuatu num:");
	scanf("%f", &n);
	printf("water num: %e", n * KATUO_W / WATER_W);
	return 0;
}