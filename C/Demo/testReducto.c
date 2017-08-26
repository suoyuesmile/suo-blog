#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 40
int main(int argc, char * argv[]){
	FILE *in, *out;
	int ch;
	char name[N];
	int count;
	//检查命令行参数
	if(argc < 2){
		fprintf(stderr, "Usage:%s filename\n", argv[0]);
		exit(EXIT_FAILURE);
	}
	//设置输入
	if( (in = fopen(argv[1], "r")) == NULL){
		fprintf(stderr, "I could not open this file\" %s \" \n ", argv[1]);
		exit(EXIT_FAILURE);
	}
	//设置输出
	strncpy(name, argv[1], N - 5);
	name[N -5] = '\0';
	strcat(name, ".red");
	if( (out = fopen(name, "w")) == NULL ){
		fprintf(stderr, "I could not open this file");
		exit(3);
	}
	//拷贝
	while( (ch = getc(in)) != EOF ){
		if (count++ % 3 == 0)
			putc(ch, out);
	}
	//关闭文件
	if( fclose(in) != 0 || fclose(out) != 0 )
		fprintf(stderr, "Error in closing files\n");
	return 0;
}