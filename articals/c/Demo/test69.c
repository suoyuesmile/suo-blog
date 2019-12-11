#include <stdio.h>
double power(double, int);
int main(){
	double n;
	int c;
	scanf("%lf%d", &n, &c);
	printf("%.2lf\n", power(n, c));
	return 0;
}
double power(double n, int c){
	int i, pow = 1;
	if( n == 0 )
		return 0;
	if( c == 0 )
		return 1;
	for (i = 1; i <= c; ++i)
		pow *= n;
	return pow;
}
