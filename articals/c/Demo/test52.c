#include <stdio.h>
#define BASIC_SALARY 10.00
#define LOVER_RATE 0.15
#define MIDDLE_RATE 0.2
#define HIGH_RATE 0.25

int main(){
	float work_hours, salary, tax, income;
	printf("Enter your work hours:");
	scanf("%f", &work_hours);
	if(work_hours > 40){
		work_hours= 40 + (work_hours-40) * 1.5;
	}
	salary = work_hours * BASIC_SALARY;
	if(salary <= 300)
		tax = salary * LOVER_RATE;
	else if(salary <= 450)
		tax = 300 * LOVER_RATE + (salary-300) * MIDDLE_RATE;
	else
		tax = 300 * LOVER_RATE + 150 * MIDDLE_RATE + (salary-450) * HIGH_RATE ;
	income = salary - tax;
	printf("his salary, tax, income are %.2f, %.2f, %.2f\n", salary, tax, income);
	return 0;
}