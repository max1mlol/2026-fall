#include<stdio.h>
#include<stdlib.h>
#define READY 1
#define RUNNING 2
#define WAITING 3
#define TERMINATED 4

struct PCB {
    int process_id;
    int priority;
    int state;
    int process_counter;
    int burst_time;
    int waiting_time;
};

void printPCB(struct PCB p){
    printf("PID: %d | Priority: %d | State: %d | Counter: %d | Burst: %d | Waiting: %d\n", 
           p.process_id, p.priority, p.state, p.process_counter, p.burst_time, p.waiting_time);   
}

void contextSwitch(struct PCB *current, struct PCB *next){
    printf("[Context Switch] Process %d -> Process %d\n", current->process_id, next->process_id);
    current->state = READY;
    next->state = RUNNING;
}

int selectNextProcess(struct PCB processes[], int n) {
    int highest_priority = 999;
    int selected_index = -1;

    for (int i = 0; i < n; i++) {
        if (processes[i].state == READY && processes[i].priority < highest_priority) {
            highest_priority = processes[i].priority;
            selected_index = i;
        }
    }
    return selected_index;
}

void process1(struct PCB *p){
    p->state = RUNNING;
    p->process_counter++;
    printf("Process 1 generated and sorted numbers. Counter = %d\n", p->process_counter);
}

void process2(struct PCB *p){
    p->state = RUNNING;
    p->process_counter++;
    printf("Process 2 added matrixes. Counter = %d\n", p->process_counter);
}

void process3(struct PCB *p){
    p->state = RUNNING;
    p->process_counter++;
    printf("Process 3 counted character frequency. Counter = %d\n", p->process_counter);
}

int main(){
    struct PCB processes[3] = {
        {1, 1, READY, 0, 5, 0},
        {2, 2, READY, 0, 4, 0},
        {3, 3, READY, 0, 3, 0}
    };

    printf("Initial Process Table:\n");
    for(int i = 0; i < 3; i++) {
        printPCB(processes[i]);
    }
    printf("\n");

    int next_idx = selectNextProcess(processes, 3);
    if(next_idx != -1) {
        printf("Scheduler selected Process %d\n", processes[next_idx].process_id);
    }
    process1(&processes[0]);

    contextSwitch(&processes[0], &processes[1]);
    process2(&processes[1]);

    processes[1].state = WAITING;
    processes[1].waiting_time += 2; // Хүлээлтийн хугацааг нэмэгдүүлэх
    printf("Process 2 state changed to WAITING (Waiting time: %d)\n", processes[1].waiting_time);

    processes[1].state = READY;
    printf("Process 2 state changed back to READY\n");

    contextSwitch(&processes[1], &processes[2]);
    process3(&processes[2]);

    processes[2].state = TERMINATED;
    printf("Process 3 state changed to TERMINATED\n");

    return 0;
}