#include <stdio.h>
void to_base_n(int, int);
int main(void){
	int x, n;
	scanf("%d%d", &x, &n);
	to_base_n(x, n);
	return 0;
}
void to_base_n(int x, int n){
	int r;
	r = x%n;
	if(x >=  n)
		to_base_n(x/n, n);
	printf("%d", r );
}