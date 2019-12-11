#include <stdio.h>
#define COLS 3
#define ROWS 2
void cp_arr(double [], const double [], int);
void cp2_arr2(double [][COLS], const double [][COLS], int);
void show_arr2(const double [][COLS], int);

int main(void){
	double arr1[ROWS][COLS] = { {1,2,3}, {4,5,6} };
	double arr2[ROWS][COLS];
	cp2_arr2(arr2, arr1, ROWS);
	show_arr2(arr2, ROWS);
	return 0;
}
void cp_arr(double target[], const double source[], int n){
	int i;
	for (i = 0; i < n; ++i)
	{
		target[i] = source[i];
	}
}
void cp2_arr2(double tgt[][COLS], const double src[][COLS], int rows){
	int i;
	for (i = 0; i < rows; ++i)
		cp_arr(tgt[i], src[i], COLS); 
}
void show_arr2(const double a[][COLS], int rows){
	int i, j;
	for (i = 0; i < rows; ++i)
	{
		for (j = 0; j < COLS; ++j)
			printf("%.2lf ", a[i][j]);
		printf("\n");
	}
}