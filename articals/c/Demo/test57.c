#include <stdio.h>
#include <ctype.h>
int main(){
	char ch;
	int count = 0;
	while( (ch = getchar()) != EOF )
	{
		if(isblank(ch) || ch == '\n')
			continue;
		count++;
	}
	printf("count : %d\n", count);
	return 0;
}