#include <stdio.h>
void to_binary(int);
int main(void){
	int n;
	scanf("%d", &n);
	to_binary(n);
	return 0;
}

void to_binary(int n){
	int r;
	r = n % 2;
	if( n >= 2 )
		to_binary( n/2 );
	printf("%d", r==0 ? 0 : 1);
}