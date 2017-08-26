#include <stdio.h>
int main(){
	int a = 0, b =0;
	int pn1 = printf("ok!\n");            // pn1 = 4
	int pn2 = printf("ok!,%d,%d\n",a, b); // pn2 = 8
	int sn1 = scanf("%d", &a, &b);        // sn1 = 1
	int sn2 = scanf("%d%d", &a, &b);      // sn2 = 2
	printf("pn1=%d, sn1=%d, pn2=%d, sn2=%d\n", pn1, sn1, pn2, sn2);
	return 0;
}