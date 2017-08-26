#include <stdio.h>
void thr(int n);
int main(){
	int n;
	scanf("%d", &n);
	thr(n);
	return 0;
}

void thr(int n){
	printf("%d\n", n*n*n);
}