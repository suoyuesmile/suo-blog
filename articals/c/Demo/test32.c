#include <stdio.h>
void resmode();
int main(){
	int first, second;
	printf("start!\n");
	printf("input second operand\n");
	scanf("%d", &second);
	printf("input first operand\n");
	scanf("%d", &first);
	resmode(first, second);
	printf("done!\n");
}
void resmode(int first, int second){
	printf("%d %% %d is %d\n", first, second, first%second);
}

