#include <stdio.h>
void order(double *, double *, double *);
void swap(double *, double *);
int main(void){
	double a, b, c;
	scanf("%lf%lf%lf", &a, &b, &c);
	order(&a, &b, &c);
	printf("%.2lf, %.2lf, %.2lf\n", a, b, c);
	return 0;
}
void order(double *a, double *b, double *c){
	if(*a > *b)
		swap(a, b);
	if(*b > *c)
		swap(b, c);
}
void swap(double *m, double *n){
	double tem;
	tem = *m;
	*m = *n;
	*n = tem;
}