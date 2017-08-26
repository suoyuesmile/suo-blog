#include <iostream>
using namespace std;
int SumI(int A[], int n){
	int sum = 0;
	for (int i = 0; i < n; ++i)
	{
		sum += A[i];
	}
	return sum;
} //迭代
int SumJ(int A[], int n){
	return (n < 1) ? 0 : SumJ(A, n-1) + A[n+1] ;
} //递归
int sum(int A[], int lo, int hi){
	if(lo == hi) return A[lo];
	int mi = (lo+hi) >> 1;
	return sum(A, lo, mi) + sum(A, mi + 1, hi);
}//二分递归
int main(){
	int A[10] = {1,2,3,4,5,6,7,7,8,9};
	// cout << SumI(a, 10) << endl;
	// cout << SumJ(A, 10) << endl;
	cout << sum(A, 0, 9);
	return 0;
}