#include <stdio.h>
double avg(double, double);
int main(){
	double a, b;
	scanf("%lf%lf", &a, &b);
	printf("%.2lf", avg(a, b) );
	return 0;
}
double avg(double a, double b){
	return 1./( (1./a + 1./b)/2. );
}