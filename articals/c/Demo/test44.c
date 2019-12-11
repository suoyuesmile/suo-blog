#include <stdio.h>
int main(){
	float f1 = 1.0, f2 = 1.0, sum1 = 0, sum2 = 0;
	int i, n;
	scanf("%d", &n);
	while( n > 0){
		f1 = 1.0, f2 = 1.0, sum1 = 0, sum2 = 0;
		for (i = 0; i < n; ++i)
		{
			sum1 += f1/f2;
			if( (i+1)%2 == 0 ) {
				sum2 -= f1/f2;
			}else{
				sum2 += f1/f2;
			}
			f2++;
		}
		printf("sum1 = %f, sum2 = %f\n", sum1, sum2);
		scanf("%d", &n);
	}
	return 0;
}