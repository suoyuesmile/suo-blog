#include <stdio.h>
#define N 7
#define M 3
void cp_arr(double [], const double [], int);
void cp_ptr(double [], const double *, int);
void cp_ptrs(double *, const double *, const double *);
void show_arr(double [], int);
int main(void){
	double source[N] = {1, 2, 3, 4, 5, 6, 7};
	double target1[M], target2[M], target3[M];
	cp_arr(target1, source, M);
	cp_ptr(target2, source, M);
	cp_ptrs(target3, source+2, source+5);
	show_arr(target1, M);
	putchar('\n');
	show_arr(target2, M);
	putchar('\n');
	show_arr(target3, M);
	putchar('\n');
	return 0;
}
void cp_arr(double target[], const double source[], int m){
	int i;
	for (i = 2; i < 2+m; ++i)
	{
		target[i-2] = source[i];
	}
}
void cp_ptr(double target[], const double *source, int m){
	int i;
	for (i = 2; i < 2+m; ++i)
	{
		target[i-2] = *(source+i);
	}
}
void cp_ptrs(double target[], const double *source_start, const double *source_end){
	while(source_start < source_end){
		*target = *source_start++;
		target++;
	}
}
void show_arr(double a[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		printf("%.2lf ", a[i]);
	}
}