#include <stdio.h>
#include <string.h>
#define MAX_LEN 255
int main(){
	char a[MAX_LEN];
	scanf("%s", a);
	int len = strlen(a);
	while(len-- > 0){
		printf("%c", a[len]);
	}
	return 0;
}