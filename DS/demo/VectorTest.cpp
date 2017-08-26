#include <iostream>
#include <stdio.h>
#include <vector>
#include <stack>
using namespace std;

int main() {
	// vector<int> v;
	// v.push_back(1);
	// v.push_back(2);
	// cout << v[0] << v[1] << endl;
	stack<int> s;
	s.push(1);
	s.push(2);
	cout << s.top();
	s.pop();
	cout << s.top() << endl;
	return 0;
}