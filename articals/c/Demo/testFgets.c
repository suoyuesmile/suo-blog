#include <stdio.h>
int main(void){
	char a[10];
	fgets(a, 7, stdin);  //读了dsfdsf个字符+'\0'
	fputs(a, stdout);    //输出dsfdsf\0 没有+'\n' 
	return 0;
}
//dsfdsfsdgfdgdffdg   
//dsfdsf 