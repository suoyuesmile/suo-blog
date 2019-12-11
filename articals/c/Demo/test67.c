#include <stdio.h>
void large_of(double *, double *);
int main(void){
	double a, b;
	scanf("%lf%lf", &a, &b);
	large_of(&a, &b);
	printf("%.2lf, %.2lf\n", a, b);
	return 0;
}
void large_of(double *a, double *b){
	// *a > *b ? *b = *a : *a = *b ; ??????
	if( *a > *b )
		*b = *a;
	else
		*a = *b;
}
