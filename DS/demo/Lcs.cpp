/* 
 * 最长公共子序列
 * 可行---->递归策略---->减而治之---->平凡情况
 * 效率---->动态规划---->自底而上---->迭代策略
 * 对于序列A[0,n],B[0,m], LCS(A,B)无非3种情况
 * 1) n=-1或m=-1，作空序列
 * 2) A[n] = 'X' = B[m] 则LCS( A[0,n), B[0,m), 'X' )
 * 3) A[n] != B[m] 则 LCS( A[0,n], B[0,m) ) 与 LCS( A[0,n), B[0,m] ) 中取更长者(分而治之)
 * 采用倒推式方式求公共子序列，用二维数组存储中间值
 * 
 */
//递归
#include <iostream>
#include <string>
using namespace std;
int LCS(string, int, string, int);
int LCS2(string, int, string, int);
int main(void){
	string a, b;
	cin >> a >> b;
	// cout << LCS(a, a.length()-1, b, b.length()-1) << endl;
	cout << LCS2(a, a.length(), b, b.length()) << endl;
	return 0;
}
//递归
int LCS(string a, int m, string b, int n){
	if(m == -1 || n == -1)
		return 0;
	else if(a[m] == b[n])
		return LCS(a, m-1, b, n-1) + 1;
	else
		return LCS(a, m, b, n-1) > LCS(a, m-1, b, n)
		? LCS(a, m, b, n-1) 
		: LCS(a, m-1, b, n);
}
//动态规划
int LCS2(string a, int m, string b, int n){
	int i, j, cur, pre;
	int arr[m+1][n+1];
	for (i = 0; i <= m; ++i)
	    arr[i][0] = 0;
	for (i = 0; i <= n; ++i)
	    arr[0][i] = 0;                          //动态表为0，两边缘为辅助0          
	for (i = 1; i <= m; i++ )   
	{
		for (j = 1; j <= n; j++) {
			cur = ( a[i-1] != b[j-1] ? 0 : 1 ); //获取当前元素值
			pre = ( arr[i-1][j] > arr[i][j-1] ? arr[i-1][j] :  arr[i][j-1] ); 
			arr[i][j] = pre + cur;
			cout << arr[i][j] << " ";
		}
		cout << endl;
	}
	return arr[m][n];
}
/*
  0 n a m e  
0 0 0 0 0 0 
s 0 0 0 0 0
a 0 0 1 1 1
n 0 1 1 1 1
e 0 1 1 1 2
t 0 1 1 1 2
 */