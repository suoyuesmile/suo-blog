#include <stdio.h>
int main(){
	float h;
	printf("please input your height(cm):");
	scanf("%f", &h);
	printf("Dabbey, your are %.3f (m)\n", h/100);
	return 0;
} 