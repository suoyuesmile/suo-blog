#include <stdio.h>
#include <math.h>
#include <ctype.h>
_Bool isPrime(int n);
int main(){
	unsigned a, i;
	printf("Enter a integer n(n>0):");
	if ( scanf("%u", &a) != 1 ) //not match but return 1
		printf("enter a integer must more than 0");
	else
		for (i = 2; i <= a; ++i)
			if(isPrime(i))
				printf("%d ", i);
	printf("\n");
	return 0;
}
_Bool isPrime(int n){
	_Bool res = 1;
	int i, j;
	for (i = 1; i <= sqrt(n); ++i)
	  for (j = sqrt(n); j < n; ++j)
	  	if(i * j == n)
	  		res = 0;
	return res;
}