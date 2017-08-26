#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "testRandom.c"
int main(void){
	int dice, roll;
	int sides, status;
	srand((unsigned int) time(0));
	printf("enter a number of sides:\n");
	while(scanf("%d", &sides) == 1 && sides > 0){ 
		printf("how many dice\n");
		//检查输入部分
		if(status = scanf("%d", &dice) != 1){ 
			if(status == EOF)            //检查是否有文件终止符
				break;
			else{
				while(getchar() != '\n')  //去掉换行符
					continue;
				continue;
			}
		}
		//开始计算骰子总和
		roll = roll_n_dice(dice, sides);
		//打印结果
		printf("total %d , using %d times, %d-sides\n", roll, dice, sides);
	}
	printf("function called : %d\n", roll_count);
	return 0;
}