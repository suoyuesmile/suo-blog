#include <stdio.h>
#define YEAR 5
#define MONTH 12
void perYearFall(const double [][MONTH], int);
void perMonthFall(const double [][MONTH], int);

int main(void){
	const double a[YEAR][MONTH] = {
		{4.3, 4.3, 4.3, 3.0, 2.0, 1.2, 0.2, 0.2, 0.4, 2.4, 3.5, 6.6},
		{8.5, 8.2, 1.2, 1.6, 2.4, 0.0, 5.2, 0.9, 0.3, 0.9, 1.4, 7.3},
		{9.1, 8.5, 6.7, 4.3, 2.1, 0.8, 0.2, 0.2, 1.1, 2.3, 6.1, 8.4},
		{7.2, 9.9, 8.4, 3.3, 1.2, 0.8, 1.4, 0.0, 0.6, 1.7, 4.3, 6.2},
		{7.6, 5.6, 3.8, 2.8, 3.8, 0.2, 0.0, 0.0, 0.0, 1.3, 2.6, 5.2}
	};
	perYearFall(a, YEAR);
	perMonthFall(a, YEAR);
	return 0;
}
void perYearFall(const double a[][MONTH], int year){
	int i, j;
	double yearFall, sumYearFall;
	for(i = 0; i < year; i++)
	{
		yearFall = 0;
		for(j = 0; j < MONTH; j++)
			yearFall += a[i][j];
		printf("%dyear\t\t%.2lf(inches)\n", i+2010, yearFall);
		sumYearFall += yearFall;
	}
	printf("\nthe yearly average is %.2lf\n\n", sumYearFall/year);

}
void perMonthFall(const double a[][MONTH], int year){
	int i, j;
	double monthFall;
	for (i = 0; i < MONTH; ++i)
	{
		monthFall = 0;
		for (j = 0; j < year; ++j)
			monthFall += a[j][i];
		printf("%.2lf ", monthFall/5);
	}
}