#include <stdio.h>
#include <stdlib.h>
#define SIZE 20
int get_n(){
	int words;
	if(scanf("%d", &words) == 1 && words > 0)
		return words;
	else
		printf("enter error!!!\n");
}
void show(char * a[], int n){
	int i = 0;
	while( i++ < n ){
		puts(a[i-1]);
	}
}
int main(void){
	int words, i = 0, j = 0;
	char ch;
	printf("how many words do you wish to enter:");
	words = get_n();   				 //处理输入的单词数
	// char * q [5] = (char (*) [5])malloc( SIZE * 5 * sizeof(char) ); 
	//动态创建
	printf("enter %d words:", words);
	while( (ch = getchar()) != '\n' ){
		if(ch == ' ')
		{
			char * p = (char *)malloc( i * sizeof(char) );
			q[j] = p;
			free( p );
			j++;
			i = 0;
			continue;
		}
		i++;
	}
	show(q, words);
	free( q );
	return 0;
}