#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#define SIZE 512
int main(){
	char *infile, *outfile;
	FILE *in, *out;
	char buff[SIZE];
	//输入到缓冲区
	printf("enter a in file:");
	scanf("%s", &infile);
	if( (in = fopen(infile, "r") ) == NULL ){
		fputs("std in eror", stderr);
		exit(EXIT_FAILURE);
	}
	fgets(buff, in);
	//从缓冲区输出到文件
	printf("enter a out file:");
	scanf("%s", &outfile);
	if( (out = fopen(outfile, "w") ) == NULL ){
		fputs("std out eror", stderr);
		exit(EXIT_FAILURE);
	}
	fputs(buff, out);
	return 0;
}