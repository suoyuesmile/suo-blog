#include <stdio.h>
#define N 5
void cp_arr(double [], const double [], int);
void cp_ptr(double [], const double *, int);
void cp_ptrs(double *, const double *, const double *);
void show_arr(double [], int);
int main(void){
	double source[N] = {1, 2, 3, 4, 5};
	double target1[N], target2[N], target3[N];
	cp_arr(target1, source, N);
	cp_ptr(target2, source, N);
	cp_ptrs(target3, source, source+N);
	show_arr(target1, N);
	putchar('\n');
	show_arr(target2, N);
	putchar('\n');
	show_arr(target3, N);
	putchar('\n');
	return 0;
}
void cp_arr(double target[], const double source[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		target[i] = source[i];
	}
}
void cp_ptr(double target[], const double *source, int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		target[i] = *(source+i);
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