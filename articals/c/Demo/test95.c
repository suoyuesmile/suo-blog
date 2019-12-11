#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 100
int rand1(int);
void sort(int *, int);
void show(const int *, int);
int main(){
	int a[N] = {0};
	srand( (unsigned int) time(0) );
	for (int i = 0; i < N; ++i)
	{
		a[i] = rand1(10);
	}
	show(a, N);
	sort(a, N);
	putchar('\n');
	show(a, N);
}
//产生随机数
int rand1(int n){
	return rand() % n + 1;
}
//选择排序
void sort(int *a, int n){
	for (int top = 0; top < n - 1; ++top)
		for (int seek = top + 1; seek < n; ++seek)
			if( a[top] < a[seek]){
				int tmp = a[top];
				a[top] = a[seek];
				a[seek] = tmp;
			}
}
//打印数组
void show( const int *a, int n){
	for (int i = 0; i < n; ++i)
	{
		printf("%d ", a[i]);
	}
}