#include <stdio.h>
int alpha(char);
int main(){
	char ch;
	while( (ch = getchar()) != EOF ) {
		printf("location: %d\n", alpha(ch) );
		while( getchar() != '\n')
			continue;
	}
	return 0;
}

int alpha(char ch){
	if(ch >= 65 && ch <= 90)
	{
		printf("%c is upper alpha\n", ch);
		ch -= 64;
	}
	else if(ch >=97 && ch <= 122)
	{
		ch -= 96;
		printf("%c is lower alpha\n", ch);
	}
	else{
		ch = -1;
		printf("%c is not alpha\n", ch);
	}
	return ch;
}