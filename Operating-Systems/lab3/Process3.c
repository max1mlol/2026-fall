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

void run_process3(struct PCB *pcb, const char *str) {
    pcb->state = 1; // RUNNING
    pcb->process_counter++;

    printf("\n=== Process 3 (Step %d) ===\n", pcb->process_counter);
    printf("PCB Info -> ID: %d, Priority: %d, State: RUNNING (%d), Counter: %d\n",
           pcb->process_id, pcb->priority, pcb->state, pcb->process_counter);

    printf("Ekh string: %s\n", str);

    int count[256] = {0};
    for (int i = 0; str[i] != '\0'; i++) {
        count[(unsigned char)str[i]]++;
    }

    printf("Temdegt buriin davtamj: ");
    for (int i = 0; str[i] != '\0'; i++) {
        if (count[(unsigned char)str[i]] != 0) {
            printf("%c:%d ", str[i], count[(unsigned char)str[i]]);
            count[(unsigned char)str[i]] = 0;
        }
    }
    printf("\n");

    pcb->state = 0; // READY
}

int main() {
    struct PCB p3 = {3, 3, 0, 0};
    const char *test_str = "hello operating system";
    int max_steps = 5;

    printf("Process 3 ehelj baina (Niit step: %d)...\n", max_steps);
    for (int step = 0; step < max_steps; step++) {
        run_process3(&p3, test_str);
        sleep(1);
    }

    p3.state = 3; // TERMINATED
    printf("\nProcess 3 duuslaa. Final PCB State: TERMINATED (%d)\n", p3.state);
    return 0;
}