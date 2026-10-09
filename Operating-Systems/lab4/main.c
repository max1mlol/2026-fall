#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include "pcb.h"

#ifdef _WIN32
    #include <windows.h>
    #define SLEEP_SEC(x) Sleep((x) * 1000)
#else
    #include <unistd.h>
    #define SLEEP_SEC(x) sleep(x)
#endif

void run_p1();
void run_p2();
void run_p3();
void print_all(struct PCB list[], int size);
void do_context_switch(struct PCB *old_p, struct PCB *new_p);
int get_next_proc(struct PCB procs[], int n);

int main(){
    srand(time(NULL));

    int n = 3;
    struct PCB processes[3] = {
        {1, 1, READY, 0, 3, 0},
        {2, 2, READY, 0, 4, 0},
        {3, 3, READY, 0, 2, 0}
    };

    struct PCB *curr = NULL;
    int step = 1;

    printf("Starting Process Scheduler Simulation...\n");
    print_all(processes, n);

    while(1){
        for(int i = 0; i < n; i++){
            if(processes[i].state == WAITING){
                processes[i].waiting_time--;
                if(processes[i].waiting_time <= 0){
                    processes[i].state = READY;
                    printf(">> Event: P%d moved from WAITING to READY\n", processes[i].process_id);
                }
            }
        }

        int next_i = get_next_proc(processes, n);

        if(next_i == -1){
            int done = 1;
            for(int i = 0; i < n; i++){
                if(processes[i].state != TERMINATED){
                    done = 0;
                    break;
                }
            }

            if(done){
                printf("\nAll processes finished execution.\n");
                break;
            }
            else{
                printf("\nStep %d: CPU Idle (Processes are waiting...)\n", step++);
                curr = NULL;
                SLEEP_SEC(1);
                continue;
            }
        }

        struct PCB *next = &processes[next_i];

        if(curr != next){
            if(curr != NULL && curr->state == RUNNING){
                curr->state = READY;
            }
            do_context_switch(curr, next);
            curr = next;
            curr->state = RUNNING;
        }

        printf("\nStep %d: Process %d RUNNING\n", step++, curr->process_id);
        
        if(curr->process_id == 1){
            run_p1();
        }
        else if(curr->process_id == 2){
            run_p2();
        }
        else if(curr->process_id == 3){
            run_p3();
        }

        curr->process_counter++;
        curr->burst_time--;

        if(curr->burst_time > 0 && (rand() % 3 == 0)){
            curr->state = WAITING;
            curr->waiting_time = 2;
            printf(">> Event: P%d went to WAITING state (I/O event)\n", curr->process_id);
            curr = NULL;
        }
        else if(curr->burst_time <= 0){
            curr->state = TERMINATED;
            printf(">> Event: P%d TERMINATED\n", curr->process_id);
            curr = NULL;
        }

        print_all(processes, n);
        SLEEP_SEC(1);
    }

    return 0;
}
