#include <stdio.h>
#include <string.h>
int main(){
	char w[50];
	scanf("%s", w);
	int len = strlen(w);
	while(len-- >= 0){
		printf("%c", w[len]);
	}
	return 0;
}