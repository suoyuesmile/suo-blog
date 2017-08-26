#include <stdio.h>
// int units = 0;
void critic(int );
int main(){
	int units = 0;
	scanf("%d", &units);
	if(units != 56)
		critic(units);
	return 0;
}
void critic(int u){
	printf("%d\n", u);
}