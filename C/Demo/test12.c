#include <stdio.h>
int main(){
	float f;
	printf("Enter a floating-point value:");
	scanf("%f", &f);
	printf("fixed-point natation:%f\n", f);
	printf("exponential natation:%e\n", f);
	printf("p natation:%.2a\n", f);
	return 0;
}