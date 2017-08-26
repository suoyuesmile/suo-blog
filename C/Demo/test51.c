#include <stdio.h>
int main(){
	char ch, pre;
	int n = 0;
	while( (ch = getchar()) != '#' ){
		if(pre == 'e' && ch == 'i')
			n++;
		pre = ch;	
	}
	printf("%d\n", n);
	return 0;
}
		
