#include <stdio.h>
#define PIN_CUP 2
#define CUP_YAS 8
#define YAS_SOU 2
#define SOU_CHA 3

int main(){
	float cup;
	printf("please input cup:");
	scanf("%f", &cup);
	printf("pin=%f,yas=%f,sou=%f,cha=%f\n", cup*PIN_CUP, cup/CUP_YAS, cup/CUP_YAS/YAS_SOU, cup/CUP_YAS/YAS_SOU/SOU_CHA);
	return 0;
}