#include <stdio.h>
#include <ctype.h>
int main(){
	char ch;
	int lower = 0, upper = 0;
	while( (ch = getchar()) !=  EOF ){
		if( ch == '\n' )
			continue;
		if(islower(ch))
			lower++;
		if(isupper(ch))
			upper++;
	}
	printf("lower= %d, upper= %d\n", lower, upper);
	return 0;
}