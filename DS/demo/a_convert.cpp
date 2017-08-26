#include <stdio.h>
#include <iostream>
#include <stack>
using namespace std;
//进制转换
void convert( Stack<char> & S, __int64 n, int base) {
	static char digit[] = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
	while (n > 0) {
		s.push( digit[ n % base ]);
		n /= base;
	}
}
int main() {
	Stack<char> S;
	cin >> n >> base;
	convert(S, n, base);
	while ( !S.empty() )
		cout << S.pop();
	return 0;
}