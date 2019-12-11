#include <stdio.h>
int main(){
	int ran, lower = 1, upper = 100, i = 0;
	int smart = (lower + upper) / 2;
	printf("please enter 1 ~ 100 a integer:");
	scanf("%d", &ran);
	while( ran != smart){
		if(ran < smart)
			upper = smart;
		else
			lower = smart;
		i++;
		printf("though %d times = %d\n", i, smart);
		smart = (lower + upper) / 2;
	}
	printf("though %d times = %d\n", i+1, smart);
	return 0;
}