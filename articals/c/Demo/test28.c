#include <stdio.h>
#define CM_INCHES 0.393701
#define CM_FEET 0.032808
int main(){
	float height = 1.0;
	while(height){
		printf("Enter a height in centimeters:");
		scanf("%f", &height);
		printf("%.2f cm = %.0f feet, %.2f inches\n", height, height*CM_FEET, height*CM_INCHES);
	}
	return 0;
}