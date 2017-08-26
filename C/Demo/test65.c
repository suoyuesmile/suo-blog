#include <stdio.h>
void show(char, int, int);
int main(void){
	char a;
	int b, c;
	scanf("%c%d%d", &a, &b, &c);
	show(a, b ,c);
	return 0;
}
void show(char a, int b, int c) {
	int i, j;
	for (int i = 0; i < c; ++i)
	{
		for (int j = 0; j < b; ++j)
		{
			putchar(a);
		}
		putchar('\n');
	}
}