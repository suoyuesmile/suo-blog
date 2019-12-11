#include <stdio.h>
#define NORMAL_TAX 0.15
#define EXT_TAX 0.28
void menu();
int main(){
	int choice;
	float salary, ext_line, tax;
	printf("enter your salary:\n");
	scanf("%f", &salary);
	menu();
	while( scanf("%d", &choice) == 1){
		switch (choice){
			case 1: ext_line = 17850;break; 
			case 2: ext_line = 23900;break; 
			case 3: ext_line = 29750;break; 
			case 4: ext_line = 14875;break; 
			default: printf("bye\n");break;
		}
		tax = ( salary <= ext_line ? salary*NORMAL_TAX : ext_line*NORMAL_TAX + (salary-ext_line)*EXT_TAX );
	printf("%.2f\n", tax);
	}
	
	return 0;
}
void menu(){
	printf("enter a status choice:");
	printf("**********status************\n");
	printf("     1) single\n");
	printf("     2) host\n");
	printf("     3) married\n");
	printf("     4) divorce\n");
	printf("     5) input 'q' eixt\n");
	printf("****************************\n");
}