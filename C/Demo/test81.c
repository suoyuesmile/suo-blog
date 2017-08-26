#include <stdio.h>
#define N 50
void getStr(char *, int );
int main(void){
	char a[N];
	getStr(a, N);
	puts(a);
	return 0;
}
void getStr(char * a, int n){
	while( n-- > 0){
		a[n] = getchar();
	} 
}