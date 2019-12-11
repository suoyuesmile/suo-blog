#include <stdio.h>
#define ROUND 60
int main(){
	int min = 1;
	while(min > 0){
		printf("please input a min:");
		scanf("%d", &min);
		printf("time: %d hours %d min\n", min/60, min%60);
	}
	return 0;
}