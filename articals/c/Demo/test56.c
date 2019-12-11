#include <stdio.h>
int main(){
	char choice;
	float fweight = 0, sweight = 0, tweight = 0;
	float fcharge = 0, scharge = 0, tcharge = 0;
	float weight, price, charge, orderCharge, orderWeight, account, extCharge, pay;
	printf("enter a, b, c chooce your goods, q is quit:\n");
	while ( (choice = getchar()) != 'q' )
	{
		if('\n' == choice)
			continue;
		if( choice == 'a' || choice == 'b' || choice == 'c' )
		{
			switch (choice)
			{
				case 'a':
					price = 2.05;
					printf("please enter want to buy yangli weight:\n");
					scanf("%f", &weight); ;
					fweight += weight;
					fcharge += fweight * price;
					printf("%.2f\n", fweight);
					break;
				case 'b':
					price = 1.15; 
					printf("please enter want to buy taincai weight:\n");
					scanf("%f", &weight); 
					sweight += weight;
					scharge += sweight * price;
					printf("%.2f\n", sweight);
					break;
				case 'c':
					price = 1.09;
					printf("please enter want to buy hulubo weight:\n");
					scanf("%f", &weight); 
					tweight += weight;
					tcharge += tweight * price;
					printf("%.2f\n", tweight);
					break;
		        default: ;
		    }
		}
		else
		{
			printf("pleae enter 'a', 'b', 'c' !\n");
		}
		printf("enter a, b, c chooce your goods, q is quit:\n");
	}
	orderWeight = fweight + sweight + tweight; 
	orderCharge = fcharge + scharge + tcharge;
	account = orderCharge > 100 ? orderCharge * 0.05 : 0;
	if( orderWeight <= 5 )
		extCharge = 6.5;
	else if( orderWeight <= 20)
		extCharge = 14;
	else
		extCharge = 14 + (orderWeight-14) * 0.5;
	pay = orderCharge + extCharge - account;
	printf("*******************   order    ******************\n");
	printf("*name-------price------weight-------charge*\n");
	printf("*yang-------$2.05--------%9.2f---------$%9.2f*\n", fweight, fcharge);
	printf("*tian-------$1.15--------%9.2f---------$%9.2f*\n", sweight, scharge);
	printf("*hulobo-----$1.09--------%9.2f---------$%9.2f*\n", tweight, tcharge);
	printf("totalWeight:%.2f, orderCharge:$%.2f", orderWeight, orderCharge);
	printf("account:$%.2f, extCharge:$%.2f, pay:$%.2f\n", account, extCharge, pay);
	printf("*************************************************\n");
	return 0;
}