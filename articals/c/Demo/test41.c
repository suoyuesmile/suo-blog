#include <stdio.h>
float addff(float f1, float f2);
int main(){
	float num1, num2;
	while ( scanf("%f%f", &num1, &num2) != 2 ){
		printf("please input correct digit!\n");
	}
	printf("%f\n", addff(num1, num2));
	return 0;
}
float addff(float f1, float f2){
	return (f1-f2)/(f1*f2);
}