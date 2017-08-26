#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define N 1000
int rand1(int);
void count(const int *, int);
int main(){
	int a[N] = {0};
	srand( (unsigned int) time(0) );
	for (int i = 0; i < N; ++i)
	{
		a[i] = rand1(10);
	}
	count(a, N);
}
//产生随机数
int rand1(int n){
	return rand() % n + 1;
}
//计算每个数产生的个数
void count( const int *a, int n){
	int b[10] = {0};
	for(int j = 0; j < 10; ++j)
		for(int i = 0; i < n; ++i)
			if(a[i] == j+1)
				b[j]++;
	for (int i = 0; i < 10; ++i)
		printf("%d\n", b[i]);
}