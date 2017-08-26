#include <stdio.h>
void count();
int get_int();
char get_first();
char get_choice();
int main(){
	char choice;
	count();
	while( (choice = get_choice()) != 'q' ){
		switch (choice){
			case 'a':
				printf("buy low, sell high\n");
				break;
			case 'b':
				printf("\a\n");
				break;
			case 'c':
				count();
				break;
			default:
				printf("error!!!\n");
				break;
		}
	}
	return 0;
}
//计数
void count(){
	int n, i;
	printf("Count how far?\n");
	n = get_int();
	for (int i = 0; i <= n; ++i)
	{
		printf("%d\n", i);
	}
	while( getchar() != '\n' )
		continue;
}
//异常处理
int get_int(){
	int n;
	char ch;
	while( scanf("%d", &n) != 1 ){
		while( getchar() != '\n')
			putchar(ch);
		printf("is not a integer!!!\n");
	} 
	return n;
}
//过滤换行符
char get_first(){
	char choice;
	choice = getchar();
	while( getchar() != '\n' )
		continue;
	return choice;
}
//删选合适的字符
char get_choice(){
	char choice;
	printf("please enter a, b, c\n");
	choice = get_first();
	while( (choice < 'a' || choice > 'c') && choice != 'q'){
		printf("please enter correct code!!\n");
		choice = get_first();
	}
	return choice;
}
