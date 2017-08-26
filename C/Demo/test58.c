#include <stdio.h>
void dealSpecial(char sp);
int main(){
	char ch;
	while( (ch = getchar()) != EOF ){
		// if( ch == '\n' )
		// 	continue;
		dealSpecial(ch);
		// putchar(ch);
		// while(getchar() != '\n')
		// 	continue;
	}
	return 0;
}
void dealSpecial(char sp){
	switch (sp){
		case '\n': printf("\\n %d", sp); break;
		case '\t': printf("\\t %d", sp); break;
		case ' ': printf("\\ %d", sp); break;
	}
}