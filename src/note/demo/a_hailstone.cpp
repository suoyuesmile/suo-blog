/**
 * Hailstone问题
 */
#include <iostream>
using namespace std;
int hailstone(int n) {
	int length = 1;
	while(1 < n){	
		n%2==0 ? n/=2 : n=3*n+1;
		length++;
	}
	return length;
}
int main(){
	int n;
	cin >> n;
	cout << hailstone(n) << endl;
	return 0;
}
