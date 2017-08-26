#include <stdio.h>
extern unsigned int rand0(void);
extern void changeNext(unsigned int);
int main(void){
	unsigned int seed;
	while( scanf("%u", &seed) == 1 ){
		changeNext(seed);
		for (int i = 0; i < 5; ++i)
			printf("%d\n", rand0());
	}
	return 0;
}