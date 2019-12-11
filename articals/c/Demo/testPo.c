#include <stdio.h>
#define SIZE 4
int sum(int * start, int * end){
    int sum = 0;
    while(start < end){
        sum += *start++;
        //分析 * ++（后缀） 同优先级右结合
        //步骤分解 1. start先使用用 sum = sum + *start;
        //		  2. start = start + 1;
    }
    return sum;
}
int main(void){
	int a[SIZE] = {1, 2 , 3, 4};
	printf("%d", sum(a, a+SIZE));
	return 0;
}
// 10  正确
