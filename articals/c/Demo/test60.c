#include <stdio.h>
int main(){
	char ch;
	int count = 0;
	while( (ch = getchar()) != EOF ){
		count++;
		if(ch == ' ' || ch == '\n'){
			printf("%d ", count - 1);
			count = 0;
		}
	}
	return 0;
}