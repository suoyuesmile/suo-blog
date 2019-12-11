#include <stdio.h>
#define N 10
int main(){
	char word[N];
	int i;
	while( fgets(word, N, stdin) != NULL && word[0] != '\n'){
		i = 0;
		while(word[i] != '\n' && word[i] != '\0')
			i++;             //不是换行符或者空字符跳过
		if(word[i] == '\n')
			word[i] = '\0'; //遇到换行符，转空字符
		else
			while(getchar() != '\n') //读到空字符，丢弃剩余
				continue;
		fputs(word, stdout);
	}
	return 0;
}