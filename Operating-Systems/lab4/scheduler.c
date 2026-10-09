#include <stdio.h>
#include "pcb.h"

const char* getStateStr(enum State s){
    if(s == NEW){
        return "NEW";
    }
    else if(s == READY){
        return "READY";
    }
    else if(s == RUNNING){
        return "RUNNING";
    }
    else if(s == WAITING){
        return "WAITING";
    }
    else if(s == TERMINATED){
        return "TERMINATED";
    }
    return "UNKNOWN";
}

void print_pcb_info(struct PCB p){
    printf("PID: %d | Priority: %d | State: %-10s | Counter: %d | Burst: %d | WaitTime: %d\n",
           p.process_id, p.priority, getStateStr(p.state), p.process_counter, p.burst_time, p.waiting_time);
}

void print_all(struct PCB list[], int size){
    printf("\n--- Process Table ---\n");
    for(int i = 0; i < size; i++){
        print_pcb_info(list[i]);
    }
    printf("---------------------\n\n");
}

void do_context_switch(struct PCB *old_p, struct PCB *new_p){
    printf("\n-----------------------------------\n");
    if(old_p == NULL){
        printf("[Context Switch] CPU -> Process %d\n", new_p->process_id);
    }
    else{
        printf("[Context Switch] Process %d -> Process %d\n", old_p->process_id, new_p->process_id);
        printf("Saving P%d state (%s)...\n", old_p->process_id, getStateStr(old_p->state));
    }
    printf("Loading P%d state (RUNNING)...\n", new_p->process_id);
    printf("-----------------------------------\n");
}

int get_next_proc(struct PCB procs[], int n){
    int idx = -1;
    int min_prio = 999;

    for(int i = 0; i < n; i++){
        if(procs[i].state == READY){
            if(procs[i].priority < min_prio){
                min_prio = procs[i].priority;
                idx = i;
            }
        }
    }
    return idx;
}
