#include <stdio.h>
int main(void){
	int mode;
	printf("enter 0 for metric, 1 for Us mode:\n");
	while(scanf("%d", &mode) == 1 && mode >= 0){
		set_mode(mode);
		get_info();
		show_info();
		printf("enter 0 for metric, 1 for Us mode:\n");
		printf("-1 to quit:");
	}
	return 0;
}