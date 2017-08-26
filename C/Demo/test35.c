#include <stdio.h>
int main(){
	char lets[27] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	int i, j;
	for (i = 0; i < 6; ++i)
	{
		for (j = 0; j <= i; j++)
		{
			printf("%c", lets[5-j]);
		}
		printf("\n");
	}
	return 0;
}