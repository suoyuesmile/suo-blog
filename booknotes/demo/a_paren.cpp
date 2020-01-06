#include <stdio.h>
#include <iostream>
#include <stack>
bool paren(const char exp[], int lo, int hi) {
	Stack<char> S;
	for (int i = lo; i < hi; i++)
		if( exp[i] == '(' )
			S.push(exp[i]);
		else if( !S.empty() )
			S.pop();
		else
			return false;
	return S.empty();
}
int main(void) {
	char exp[20] = { '(' };
	paren(exp, 0, 20);
	return 0;
}