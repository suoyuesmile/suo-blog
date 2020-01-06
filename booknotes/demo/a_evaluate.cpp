#include <stdio.h>
#include <ctype.h>
#include <iostream>
#include <stack>
using namespace std;
const char pri[N_][] = {};
//逆波兰转换
float evaluate(char * s, char * & RPN) {
	Stack<float> opnd; 
	Stack<char> optr;
	optr.push('\0');
	while (!optr.empty()) {
		if (isdigit(*S))
			readNumber(S, opnd);
		else {
			switch( orderBetween(optr.top(), *S) ) {
				case '<':
					optr.push(*S);
					S++;
					break;
				case '=':
					optr.pop();
					S++;
					break;
				case '>': {
					char op = optr.pop();
					if ('!' == op)   //一元运算符
						opnd.push( calcu(op, opnd.pop()) );
					else {           //二元运算符
						float pOpnd2 = opnd.pop(); //操作数
						float pOpnd1 = opnd.pop();
						opnd.push( calcu(pOpnd1, op, pOpnd2) ); //运算并回收
					}
					break;
				}
			}
		}
	}
	return opnd.pop();
}