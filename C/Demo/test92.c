#include <stdio.h>
static int i = 0;
int a(void);
int main(){
	int n = 10;
	while( n-- )  
		printf("%d\n", a());
}
int a(void){
	return ++i;
}