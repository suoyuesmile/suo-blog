#include <stdio.h>
void smile();
int main(){
	int i, j;
	for(i = 3; i > 0; i--)
	{
		for(j = i; j > 0; j--)
			smile();
	    printf("\n");
	}
	return 0;
}
void smile(){
	printf("Smile!");
}