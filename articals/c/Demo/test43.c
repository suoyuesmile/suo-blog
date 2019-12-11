#include <stdio.h>
#define LEN 8
void swap(int *a, int *b);
int main()
{
	int i, j, a[LEN];
	for (i = 0; i < LEN; ++i)
	{
		scanf("%d", &a[i]);
	}
	for (i = 0; i < LEN -1; ++i)
	{
		for (j = 0; j < LEN - i - 1; ++j)
		{
			if(a[j] < a[j+1])
			{
				swap(&a[j], &a[j+1]);
			}
		}
	}
	for (i = 0; i < LEN; ++i)
	{
		printf("%d ", a[i]);
	}
}
 void swap(int *a, int *b)
 {
 	int t = *a;
 	*a = *b;
 	*b = t;
 }