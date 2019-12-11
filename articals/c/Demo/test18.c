#include <stdio.h>
int main(){
	char fname[30], sname[30], tip[10] = "name:";
	printf("please input your first name:");
	scanf("%s", fname);	
	printf("please input your second name:");
	scanf("%s", sname);
	printf("\"%s %s\"\n", sname, fname);
	printf("%-20s\"%s %s\"\n", tip, sname, fname);
	printf("\"%s %s\"%20s\n", sname, fname, tip);
	return 0;
}