#include <stdio.h>
int main(int argc, char * argv[]){
	int i = argc;
	printf("%d\n", argc);
	while( i-- >  1 )  
		puts(argv[i]);
}
// --i情况  (没想到argc = 4)  (- -)
// test86 see you later  0 1 2 3 
// 1) (i = 4- 1 = 3, i > 0) -> a[3]
// 2) (i = 3- 1 = 2, i > 0) -> a[2]
// i--情况
// 1) (i = 4 > 0, i = 3 - 1 = 2) -> a[3]
// 2) (i = 3 > 0, i = 2 - 1 = 2) -> a[2]
// 3) (i = 2 > 0, i = 1 - 1 = 1) -> a[1]