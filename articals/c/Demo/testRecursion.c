#include <stdio.h>
int up_and_down(int);
int main(void){
	up_and_down( 1 );
	return 0;
}
int up_and_down(int n){
	printf("%d, %p\n", n, &n);
	if(n < 4)
		up_and_down( n + 1 );
	printf("%d, %p\n", n, &n);
}
// 1, 0060FF20
// 2, 0060FF00
// 3, 0060FEE0
// 4, 0060FEC0
// 4, 0060FEC0
// 3, 0060FEE0
// 2, 0060FF00
// 1, 0060FF20