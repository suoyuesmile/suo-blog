#include <stdio.h>
int main(){
	char ch;
	int n = 0;
	while( (ch = getchar()) != '#' ){
		putchar(ch);
		printf(" %d ", ch);
		n++;
		if(n % 8 == 0){
			putchar('\n');
		}
	}
	return 0;
}