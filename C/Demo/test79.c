#include <stdio.h>
#define ROWS 3
#define COLS 5
void getArr(double [][COLS], int);
void averageGroup(double [], const double [][COLS], int);
double average(const double [][COLS], int);
double max(double [][COLS], int);
void swap(double *, double *);
void show(double [], int, double, double);

int main(void){
	double arr[ROWS][COLS] = {0};
	double aveGroup[ROWS] = {0}; //注意初始化
	double ave = 0;
	double m = 0;
	getArr(arr, ROWS);
	averageGroup(aveGroup, arr, ROWS);
	ave = average(arr, ROWS);
	m = max(arr, ROWS);
	show(aveGroup, ROWS, ave, m);
	return 0;
}

void getArr(double a[][COLS], int rows){
	int i, j;
	for (i = 0; i < rows; ++i)
		for (j = 0; j < COLS; ++j)
			scanf("%lf", &a[i][j]);
}

void averageGroup(double b[], const double a[][COLS], int rows){
	int i, j;
	double sum = 0;
	for (i = 0; i < rows; ++i){
		for (j = 0; j < COLS; ++j)
			sum += a[i][j]; 
		b[i] = sum/rows;
	}
}

double average(const double a[][COLS], int rows){
	int i, j;
	double sum = 0;
	for (i = 0; i < rows; ++i)
		for (j = 0; j < COLS; ++j)
			sum += a[i][j]; 
	return sum/(COLS*rows);
}

double max(double a[][COLS], int rows){
	int i, j;
	for (i = 0; i < rows; ++i)
	{
		for (j = 0; j < COLS; ++j)
			if(a[i][j] > a[i][j+1])
				swap(&a[i][j], &a[i][j+1]);
		if(a[i][j] > a[i+1][j])
			swap(&a[i][j], &a[i+1][j]);
	}
	return a[i][j];

}

void show(double a[], int size, double av, double m){
	int i;
	for(i = 0; i < size; i++){
		printf("%.2lf ", a[i]);
	}
	printf("\naverage = %.2lf\n", av);
	printf("max = %.2lf\n", m);
}

void swap(double *p, double *q){
	double temp = *p;
	*p = *q;
	*q = temp;
}