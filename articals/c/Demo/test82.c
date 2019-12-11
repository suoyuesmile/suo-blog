#include <stdio.h>
#define N 50
void getStr(char *, int );
int main(void){
	char a[N];;
	getStr(a, N);
	puts(a);
	return 0;
}
void getStr(char * a, int n) {
	int i = 0;
	while( i++ < n){
		a[i] = getchar();
		if(a[i] == '\n' || a[i] == '\t' || a[i] == '\0') {
			break;
		}
	}
}