#include <stdio.h>
#define SIZE 10
void sort(double [], int);
void swap(double *, double *);
void show_arr(const double [], int);
int main(void){
	double a[] = {2,4,6,7,8,3,5,1,10,9};
	sort(a, SIZE);
	show_arr(a, SIZE);
	return 0;
}
void sort(double a[], int n){
	int i, j;
	for (int i = 0; i < n; ++i)
		for (int j = 0; j < n - i; ++j)
			if(a[j+1] > a[j])
				swap(&a[j+1], &a[j]);
}
void swap(double *p, double *q){
	double temp = *p;
	*p = *q;
	*q = temp;
}
void show_arr(const double a[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		printf("%.2lf ", a[i]);
	}
}