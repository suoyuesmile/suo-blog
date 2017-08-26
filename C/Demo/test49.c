#include <stdio.h>
#include <ctype.h>
int main(){
	char ch;
	int nblank = 0, nt = 0, n = 0;
	while( (ch = getchar()) != '#' ){
		if(ch == '\n')
			nt++;
		else if(isblank(ch))
			nblank++;
		else
			n++;
	}
	printf("nblank = %d, nt = %d, n = %d\n", nblank, nt, n);
	return 0;
}