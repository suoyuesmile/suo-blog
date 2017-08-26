#include <stdio.h>
#define YEAR_S 3.156e+7
int main(){
	float age;
	printf("please input your age:");
	scanf("%f", &age);
	printf("your live for %.0f second \n", age * YEAR_S);
	return 0;
}