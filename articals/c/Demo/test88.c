#include <stdio.h>
#include <ctype.h>
#define N 10
void pf(char * , int);
void toUpper(char * , int);
void toLower(char * , int);
int main(int argc, char * argv[]){
	char a[N];
	switch (argv[1][1]){
		case 'p': pf(a, N); break;
		case 'u': toUpper(a, N); break;		
		case 'l': toLower(a, N); break;
		default : puts("enter error!"); break;
	}
	return 0;
}
//原样输出
void pf(char * a, int n){
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		fputs(a, stdout);
	}
	
}
//输出大写
void toLower(char * a, int n){
	int i;
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		i = 0;
		while(i++ < n-1){     // i=0<9 i=1 a[0], i=1<9 i=2 a[1] ---> i=8<9 i=9 a[8]
			if(isupper(a[i-1]))
				a[i-1] = tolower(a[i-1]);
		}
		fputs(a, stdout);
	}
}
//输出小写
void toUpper(char * a, int n){
	int i;
	while( fgets(a, n, stdin) != NULL && a[0] != '\n'){
		i = 0;
		while(i++ < n-1){
			if(islower(a[i-1]))
				a[i-1] = toupper(a[i-1]);
		}
		fputs(a, stdout);
	}
}

