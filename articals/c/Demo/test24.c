#include <stdio.h>
#define JIA_S 3.785
#define YIN_KM 1.609
int main(){
	float s, fule;
	printf("please input s(yinli), fule(jialu):");
	scanf("%f%f", &s, &fule);
	printf("result:%.1f(KM/SHENG)\n", (s/YIN_KM)/(fule*JIA_S));
	return 0;
}