#include <stdio.h>
int main(){
	char a[27] = "abcdefghijklmnopqrstuvwxyz";
	int i = 0;
	while( i++ < 26){
		printf("%c\n", a[i-1]); //前面+1 ，-1即为真实元素
	}
	return 0;
}