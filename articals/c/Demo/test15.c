#include <stdio.h>
#define YIN_CM 2.54
int main(){
	float h;
	printf("please input your height:");
	scanf("%f", &h);
	printf("%f\n", h * YIN_CM);
	return 0;
}