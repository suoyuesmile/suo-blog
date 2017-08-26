#include <stdio.h>
#include <stdlib.h>
#define SIZE 512
int main(int argc, char * argv[]){
	FILE *in, *out;
	char buff[SIZE];
	//读文件到缓冲区
	if( (in = fopen(argv[1], "r")) == NULL ){
		fputs("error", stderr);
		exit(EXIT_FAILURE);
	}
	fread(buff, SIZE, 1, in);
	//从缓冲区写文件
	if( (out = fopen(argv[2], "w")) == NULL ) {
		fputs("error", stderr);
		exit(EXIT_FAILURE);
	}
	fwrite(buff, SIZE, 1, out);
	//关闭文件
	if( fclose(in) != 0 || fclose(out) != 0 )
		fputs("not close", stderr);
	return 0;
}
