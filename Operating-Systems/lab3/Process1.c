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

void run_process1(struct PCB *pcb, int n) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;

    printf("\n=== Process 1 (Step %d) ===\n", pcb->process_counter);
    printf("PCB Info -> ID: %d, Priority: %d, State: RUNNING (%d), Counter: %d\n",
           pcb->process_id, pcb->priority, pcb->state, pcb->process_counter);

    int arr[n];
    printf("Ehnii random massiv: ");
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100;
        printf("%d ", arr[i]);
    }
    printf("\n");

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Erembelsnii daraah massiv: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    pcb->state = 0; // READY
}

int main() {
    srand(time(NULL));
    struct PCB p1 = {1, 1, 0, 0};
    int max_steps = 5;

    printf("Process 1 ehelj baina (Niit step: %d)...\n", max_steps);
    for (int step = 0; step < max_steps; step++) {
        run_process1(&p1, 10);
        sleep(1);
    }

    p1.state = 3; // TERMINATED
    printf("\nProcess 1 duuslaa. Final PCB State: TERMINATED (%d)\n", p1.state);
    return 0;
}