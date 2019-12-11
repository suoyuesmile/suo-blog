#include <stdio.h>
int main(){
	int start = 5, week, weekfds, i = 0;
	printf("start friends is %d\n", start);
	scanf("%d", &week);
	while(i++ < week){
		weekfds= (start-i) * 2;
		printf("week%d friends is %d\n", i, weekfds);
		start = weekfds;
	}
	return 0;
}