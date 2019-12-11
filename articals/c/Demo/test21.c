#include <stdio.h>
int main(){
	float speed, fsize;
	printf("please input download speed, file size:");
	scanf("%f%f", &speed, &fsize);
	printf("At %.2f megabits per second, a file of %.2f megabytes downloads in %.2f seconds\n", speed, fsize, fsize/speed);
	return 0;
}