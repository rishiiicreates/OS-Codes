#include <stdio.h>

int main() {
    // Priority
    int p_bt[3] = {8, 1, 1};
    int pr[3] = {2, 1, 3};

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2 - i; j++) {
            if (pr[j] > pr[j + 1]) {
                int t1 = pr[j]; 
                pr[j] = pr[j + 1];
                pr[j + 1] = t1;

                int t2 = p_bt[j]; 
                p_bt[j] = p_bt[j + 1];
                p_bt[j + 1] = t2;
            }
        }
    }

    printf("Priority: Pr=%d, Burst=%d | Pr=%d, Burst=%d\n", pr[0], p_bt[0], pr[1], p_bt[1]);

    // Round Robin
    int rr_bt[3] = {10, 4, 2};
    int q = 2, done = 0;

    printf("Round Robin Order: ");

    while (!done) {
        done = 1;

        for (int i = 0; i < 3; i++) {
            if (rr_bt[i] > 0) {
                done = 0;
                printf("P%d ", i + 1);
                rr_bt[i] -= (rr_bt[i] > q) ? q : rr_bt[i];
            }
        }
    }

    printf("\n");
    return 0;
}

