#include <stdio.h>
#include <string.h>
 int main(){
 	char fname[30], sname[30];
 	int flen, slen;	
	printf("please input your first name:");
	scanf("%s", fname);	
	printf("please input your second name:");
	scanf("%s", sname);
	flen = strlen(fname);
 	slen = strlen(sname);
	printf("%6s %6s\n", fname, sname);
	printf("%6d %6d\n", flen, slen);
	printf("%-6s %-6s\n", fname, sname);
	printf("%-6d %-6d\n", flen, slen);
 	return 0;
 }