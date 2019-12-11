#include <stdio.h>
void show_vla(int, int, double [*][*]);
int main(void){
	int i, j;
	const int rows = 3;
	const int cols = 5;
	double arr[rows][cols] = {{1,2,3,4,5}, {6,7,8,9,10}, {11,12,13,14,15}};
	double arr2[rows][cols];
	for(i=0; i<rows; i++)
		for(j=0; j<cols; j++)
			arr2[i][j] = arr[i][j];
	show_vla(rows, cols, arr2[rows][cols]);
	return 0;
}
void show_vla(int rows, int cols, double arr[rows][cols]){
	int i, j;
	for (i = 0; i < rows; ++i)
		for(j = 0; j< cols; ++j)
			printf("%lf ", arr[i][j]);
}
//不能使用可变长数组