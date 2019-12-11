#include <stdio.h>
#define N 10
int main(void){
	char word[N];
	while( fgets(word, N, stdin) != NULL && word[0] != '\n' ){
		fputs(word, stdout);
	}
	return 0;
}