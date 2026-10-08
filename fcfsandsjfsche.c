#include <stdio.h>

void show(int n, int bt[], char* name){
	
	int wt = 0;

	printf("\n%s -> PID: Waiting Time\n", name);
	for (int i = 0; i < n; i++){
		printf("P%d: %d\n", i + 1, wt);
		wt += bt[i];
	}
}

int main(){
	int n = 3;
	int bt[3] = {24, 3, 3};

	show(n, bt, "FCFS");


	// SJF: short burst times accending
	for (int i = 0; i < n - 1; i++){
		for (int j = 0; j < n - i - 1; j++){
			if (bt[j] > bt[j-1]){
				int temp = bt[j];
				bt[j] = bt[j+1];
				bt[j+1] = temp;
			}
		}
	}

	show(n, bt, "SJF");
	return 0;
}
