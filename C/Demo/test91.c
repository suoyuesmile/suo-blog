#include "test91.h"
void set_mode(int mode){
	if(mode == 0)
		fule =  distance/kalub;
	if(mode == 1)
		fule = distance/kalub*100;
}
void get_info(void){
	printf("enter a kalub, distance, fule:");
	scanf("%lf%lf%lf", kalub, distance, fule);
}
void show_info(void){
	printf("%d\n", fule);
}