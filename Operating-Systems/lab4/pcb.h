#ifndef PCB_H
#define PCB_H

enum State{
    NEW,
    READY,
    RUNNING,
    WAITING,
    TERMINATED
};

struct PCB{
    int process_id;
    int priority;
    enum State state;
    int process_counter;
    int burst_time;
    int waiting_time;
};

#endif
