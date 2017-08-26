#include <iostream>
using namespace std;
//起泡排序
void bubblesort(int A[], int n){
	for( bool sorted = false; sorted = !sorted; n--)
		for(int i = 1; i < n; i++)
			if(A[i-1] > A[i]){
				swap(A[i-1, A[i]]);
				sorted = false;
			}
}
int main(){
	return 0;
}