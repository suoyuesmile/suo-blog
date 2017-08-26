#include <stdio.h>
#include <string.h>
#define SIZE 81  //字符串长度
#define LIM 20   //最大行数
#define HALT ""  //读到空字符结束
void strSort(char * str [], int num); //排序函数
char * strGets(char * , int );    //输入字符串函数

int main(void){
	char in[LIM][SIZE];
	char * pstr[LIM];
	int ct = 0, k = 0; //输入输出计数
	while(ct < LIM && strGets(in[ct], SIZE) != NULL && in[ct][0] != '\0'){
		pstr[ct] = in[ct];
		ct++;          //输入字符串
	}
	strSort(pstr, ct); //排序字符串
	for(k = 0; k < ct; k++)
		puts(pstr[k]); //输出字符串
	return 0;
}
//选择排序
void strSort(char * str [], int num){
	char *temp;
	int top, seek;
	for (top = 0; top < num-1; ++top)
	{
		for (seek = top + 1; seek < num; ++seek)
		{
			if( strcmp(str[top], str[seek]) > 0 )
				temp = str[top];
				str[top] = str[seek];
				str[seek] = temp; 
		}
	}
}
//自定义输入函数
char * strGets(char * str, int n){
	char * ret_val;
	int i = 0;
	ret_val = fgets(str, n, stdin);
	if(ret_val){
		while(str[i] != '\n' && str[i] != '\0')
			i++;
		if(str[i] == '\n')
			str[i] = '\0';
		else
			while(getchar() != '\n')
				continue;
	}
	return ret_val;
}