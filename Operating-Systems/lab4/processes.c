#include <stdio.h>
#include <stdlib.h>
#include "pcb.h"

void run_p1(){
    printf("[P1 Work] Generating and sorting array...\n");
    int nums[5];
    for(int i = 0; i < 5; i++){
        nums[i] = rand() % 50;
    }

    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 4 - i; j++){
            if(nums[j] > nums[j+1]){
                int tmp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tmp;
            }
        }
    }

    printf("Sorted: ");
    for(int i = 0; i < 5; i++){
        printf("%d ", nums[i]);
    }
    printf("\n");
}

void run_p2(){
    printf("[P2 Work] Adding 2x2 matrices...\n");
    int m1[2][2] = {{1, 2}, {3, 4}};
    int m2[2][2] = {{5, 6}, {7, 8}};
    int res[2][2];

    for(int i = 0; i < 2; i++){
        for(int j = 0; j < 2; j++){
            res[i][j] = m1[i][j] + m2[i][j];
        }
    }
    printf("Result matrix: [%d %d] [%d %d]\n", res[0][0], res[0][1], res[1][0], res[1][1]);
}

void run_p3(){
    printf("[P3 Work] Counting character frequency...\n");
    char text[] = "operating system lab four";
    char find = 'o';
    int cnt = 0;

    for(int i = 0; text[i] != '\0'; i++){
        if(text[i] == find){
            cnt++;
        }
    }
    printf("Found '%c' in text: %d times\n", find, cnt);
}
