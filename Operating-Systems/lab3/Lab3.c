#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

struct PCB {
    int process_id;
    int priority;
    int state; // 0: READY, 1: RUNNING, 2: WAITING, 3: TERMINATED
    int process_counter;
};

void step_process1(struct PCB *pcb, int n) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;
    printf("\n--- [RUNNING] Process 1 (Step %d) ---\n", pcb->process_counter);

    int arr[n];
    for (int i = 0; i < n; i++) arr[i] = rand() % 100;

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    printf("Process 1: %d too erembelzh duuslaa. Ehnii too: %d, Etsiin too: %d\n", n, arr[0], arr[n-1]);
    printf("PCB Update -> ID: %d, State: READY (0), Counter: %d\n", pcb->process_id, pcb->process_counter);
    pcb->state = 0; // READY
}

void step_process2(struct PCB *pcb, int m, int n) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;
    printf("\n--- [RUNNING] Process 2 (Step %d) ---\n", pcb->process_counter);

    int A[m][n], B[m][n], C[m][n];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            A[i][j] = rand() % 10;
            B[i][j] = rand() % 10;
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    printf("Process 2: %dx%d matritsiig amjilltai nemlee. C[0][0] = %d\n", m, n, C[0][0]);
    printf("PCB Update -> ID: %d, State: READY (0), Counter: %d\n", pcb->process_id, pcb->process_counter);
    pcb->state = 0; // READY
}

void step_process3(struct PCB *pcb, const char *str) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;
    printf("\n--- [RUNNING] Process 3 (Step %d) ---\n", pcb->process_counter);

    int count[256] = {0};
    for (int i = 0; str[i] != '\0'; i++) {
        count[(unsigned char)str[i]]++;
    }
    printf("Process 3: '%s' temdegt muriin davtamjiig toolloo.\n", str);
    printf("PCB Update -> ID: %d, State: READY (0), Counter: %d\n", pcb->process_id, pcb->process_counter);
    pcb->state = 0; // READY
}

int main() {
    srand(time(NULL));

    struct PCB p1 = {1, 1, 0, 0};
    struct PCB p2 = {2, 2, 0, 0};
    struct PCB p3 = {3, 3, 0, 0};

    int choice;
    int max_steps = 5;

    printf("=========================================\n");
    printf("  Process Control Block (PCB) Simulation  \n");
    printf("=========================================\n");
    printf("1. Process 1 ajilluulah (%d steps)\n", max_steps);
    printf("2. Process 2 ajilluulah (%d steps)\n", max_steps);
    printf("3. Process 3 ajilluulah (%d steps)\n", max_steps);
    printf("4. Round-Robin Simulation (%d cycles)\n", max_steps);
    printf("Songolt oruulna uu: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            for (int i = 0; i < max_steps; i++) { step_process1(&p1, 10); sleep(1); }
            p1.state = 3;
            printf("\nProcess 1 finished execution.\n");
            break;
        case 2:
            for (int i = 0; i < max_steps; i++) { step_process2(&p2, 3, 3); sleep(1); }
            p2.state = 3;
            printf("\nProcess 2 finished execution.\n");
            break;
        case 3:
            for (int i = 0; i < max_steps; i++) { step_process3(&p3, "hello world"); sleep(1); }
            p3.state = 3;
            printf("\nProcess 3 finished execution.\n");
            break;
        case 4:
            printf("\n--- Round-Robin Scheduler ehelj baina (%d cycles) ---\n", max_steps);
            for (int i = 0; i < max_steps; i++) {
                printf("\n>>> Round-Robin Cycle %d / %d <<<\n", i + 1, max_steps);
                step_process1(&p1, 10);
                sleep(1);

                step_process2(&p2, 3, 3);
                sleep(1);

                step_process3(&p3, "hello process simulation");
                sleep(1);
            }
            p1.state = 3;
            p2.state = 3;
            p3.state = 3;
            printf("\n--- Round-Robin Simulation finished successfully ---\n");
            break;
        default:
            printf("Buruu songolt hiilee.\n");
            break;
    }

    return 0;
}