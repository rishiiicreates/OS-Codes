#include <stdio.h>

int main(){

	int n = 3, m = 2; // 3 process, 2 resources
	
	int alloc[3][2] = {
		{1,0}, 
		{0,2},
		{1,1}
	};

	int max[3][2] = {
		{2,1}, 
		{1,2}, 
		{2,2}
	};

	int avail[2] = {1,1};

	int finish[3] = {0}, seq[3], count = 0;

	while (count < n){

		int found = 0;
		for (int i = 0; i < n; i++){
			if (!finish[i]){
				int ok = 1;
				for (int j = 0; j < m; j++){
					if(max[i][j] - alloc[i][j] > avail[j]) ok = 0;
				}

				if (ok) { 
					for (int j = 0; j < m; j++) avail[j] += alloc[i][j];
					seq[count++] = i;
					finish[i] = 1;
					found = 1;
				}
			}
		}
		if (!found){
			printf("Unsafe State!\n");
			return 0;
		}
	}

	printf("Safe Sequence: ");
	for (int i = 0; i < n; i++) printf("P%d ", seq[i]);

	return 0;
}

						
