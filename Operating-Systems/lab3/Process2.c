#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

struct PCB {
    int process_id;
    int priority;
    int state; // 0: READY, 1: RUNNING, 2: WAITING, 3: TERMINATED
    int process_counter;
};

void run_process2(struct PCB *pcb, int m, int n) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;

    printf("\n=== Process 2 (Step %d) ===\n", pcb->process_counter);
    printf("PCB Info -> ID: %d, Priority: %d, State: RUNNING (%d), Counter: %d\n",
           pcb->process_id, pcb->priority, pcb->state, pcb->process_counter);

    int A[m][n], B[m][n], C[m][n];

    printf("A matrits:\n");
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            A[i][j] = rand() % 10;
            printf("%d ", A[i][j]);
        }
        printf("\n");
    }

    printf("B matrits:\n");
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            B[i][j] = rand() % 10;
            printf("%d ", B[i][j]);
        }
        printf("\n");
    }

    printf("C = A + B matrits:\n");
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    pcb->state = 0; // READY
}

int main() {
    srand(time(NULL));
    struct PCB p2 = {2, 2, 0, 0};
    int max_steps = 5;

    printf("Process 2 ehelj baina (Niit step: %d)...\n", max_steps);
    for (int step = 0; step < max_steps; step++) {
        run_process2(&p2, 3, 3);
        sleep(1);
    }

    p2.state = 3; // TERMINATED
    printf("\nProcess 2 duuslaa. Final PCB State: TERMINATED (%d)\n", p2.state);
    return 0;
}