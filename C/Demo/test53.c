#include <stdio.h>
#define LOVER_RATE 0.15
#define MIDDLE_RATE 0.2
#define HIGH_RATE 0.25

int main(){
	float work_hours, basic, salary, tax, income;
	int choice;
	printf("Enter your work hours:");
	scanf("%f", &work_hours);
	printf("*******************************************************************\n");
	printf("Enter the number corresponding to the desired pay rate or action:\n");
	printf("1) $8.75/hr");
	printf("\t\t\t2) $9.33/hr\n");
	printf("3) $10.00/hr");
	printf("\t\t\t4) $11.2/hr\n");
	printf("5) quit!\n");
	printf("*******************************************************************\n");
	while ( scanf("%d", &choice) == 1){
		switch (choice){
			case 1: basic = 8.75; break;
			case 2: basic = 9.33; break;
			case 3: basic = 10.00; break;
			case 4: basic = 11.2; break;
			default: break;
		} 
	}
	if(work_hours > 40){
		work_hours= 40 + (work_hours-40) * 1.5;
	}
	salary = work_hours * basic;
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
