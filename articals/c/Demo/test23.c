#include <stdio.h>
#include <float.h>
int main(){
	double d = 1.0/3.0;
	float f = 1.0/3.0;
	printf("%.6Lf, %.12Lf, %.18Lf\n", d, d, d);
	printf("%.18Lf\n", DBL_DIG);
	printf("%.6f, %.12f, %.18f\n", f, f, f);
	printf("%.18f\n", FLT_DIG);
	return 0;
}