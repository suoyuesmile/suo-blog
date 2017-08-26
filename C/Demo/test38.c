#include <stdio.h>
int main(){
	int i, start, end;
	printf("start,end\n");
	scanf("%d,%d",&start, &end);
	for (i = start; i <= end; ++i)
	{
		printf("------------------------------\n");
		printf("|%-9d|%-9d|%-9d|\n", i, i*i, i*i*i);
	}
	printf("------------------------------\n");
	return 0;
}