#include <stdio.h>
#define START 64
int main(){
	char ch;
	int i, j;
	scanf("%c", &ch);
	for (j = 0; j < ch - START; ++j)
	{
		for (i = 0; i < ch - START - j - 1; ++i)
		{
			printf(" ");
		}
		for (i = 0; i < j ; ++i)
		{
			printf("%c", START + 1 + i);
		}
		printf("%c", START + j + 1);
		for (i = j; i > 0; --i)
		{
			printf("%c", START + i);
		}
		printf("\n");
	}
	return 0;
}