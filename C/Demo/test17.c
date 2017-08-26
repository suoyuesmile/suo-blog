#include <stdio.h>
#include <string.h>
int main(){
	char fname[30];
	char sname[30];
	printf("please input your first name:");
	scanf("%s", fname);	
	printf("please input your second name:");
	scanf("%s", sname);
	printf("%s,%s\n", sname, fname);
	return 0;
}