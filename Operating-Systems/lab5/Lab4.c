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
};

void printPCB(struct PCB p){
    printf("PID: %d | Priority: %d | State: %d | Counter: %d\n", p.process_id, p.priority, p.state, p.process_counter);   
}
void contextSwitch(struct PCB *current, struct PCB *next){
    printf("[Context Switch] Process %d -> Process %d\n", current->process_id, next->process_id);
    current->state = READY;
    next->state = RUNNING;
}
void process1(struct PCB *p){
    p->state = RUNNING;
    p->process_counter;
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
    struct PCB p1 = {1, 1, READY, 0};
    struct PCB p2 = {2, 2, READY, 0};
    struct PCB p3 = {3, 3, READY, 0};

    printf("Initial Pcess Table:\n");
    printPCB(p1);
    printPCB(p2);
    printPCB(p3);
    printf("\n");

    process1(&p1);

    contextSwitch(&p1, &p2);
    process2(&p2);

    p2.state = WAITING;
    printf("Process 2 state changed to WAITING\n");

    p2.state = READY;
    printf("Process 2 state changed back to READY\n");

    contextSwitch(&p2, &p3);
    process3(&p3);

    p3.state = TERMINATED;
    printf("Process 3 state changed to TERMINATED\n");

    return 0;
}