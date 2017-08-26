#include <stdio.h>
#define LEN 8
int main(){
	int arr[LEN];
	int i, tem = 1;
	for (i = 0; i < LEN; ++i)
	{
		tem *= 2;
		arr[i] = tem;
	}
	i = 0;
	do{
		printf("%d ", arr[i]);
		i++;
	}while (i < LEN);
	return 0;
}