#include <stdio.h>
#include <stdlib.h>		
int roll_count = 0;
int roll_n_dice(int, int);
int rollem(int);
// int main(void){
// 	for (int i = 0; i < 10; ++i)
// 	{
// 		printf("%d\n", rollem(6));
// 	}
// 	return 0;
// }
//生成1 - 6 之间的随机数
int rollem(int sides){
	int roll;
	roll = rand() % sides + 1;
	roll_count++;
	return roll;
} 
int roll_n_dice(int dice, int sides){
	int d;
	int total =  0;
	if(sides < 2)
		return -2;
	if(sides < 1)
		return -1;
	for (d = 0; d < dice; ++d)
		total += rollem(sides);
	return total;
} 