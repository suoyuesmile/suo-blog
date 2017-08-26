#include <stdio.h>
#include <string.h>
void reStr(char *, int);
int main(void){
	char str[20];
	while( fgets(str, 20, stdin) ){
		reStr(str, strlen(str));
		fputs(str, stdout);
	}
	return 0;
}
void reStr(char * a, int n){
	int i = 0;
	char b[n];
	while(i++ < n)
		b[i] = a[i-1];
	i = 0;
	while(n-- >= 0){
		a[i] = b[n];
		i++;
	}
}