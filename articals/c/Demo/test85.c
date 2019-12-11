#include <stdio.h>
#include <ctype.h>
#define N 10
int main(void){
	char a[N];
	int i, word, up, low, num, pun;
	int countWord, countUp, countLow, countNum, countPun;
	while( fgets(a, N, stdin) != NULL && a[0] != '\n'){
		i = 0, num=0, low=0, up=0, pun=0, word=0;
		if(a[i] == '\n')
			a[i] == ' ';
		if(isblank(a[i]))
			word++;
		else if(isdigit(a[i]))
			num++;
		else if(islower(a[i]))
			low++;
		else if(isupper(a[i]))
			up++;
		else 
			pun++;
}
	return 0;
}

		