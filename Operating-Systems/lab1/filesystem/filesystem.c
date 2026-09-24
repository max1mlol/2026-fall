#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <dirent.h>

#define MAX 1024

void dir_cmd() {
    DIR *d = opendir(".");
    struct dirent *file;

    if (d == NULL) {
        printf("Directory error\n");
        return;
    }

    while ((file = readdir(d)) != NULL) {
        printf("%s\n", file->d_name);
    }

    closedir(d);
}

void create_cmd(char *name) {
    FILE *f;

    if (name == NULL) {
        printf("Usage: create filename\n");
        return;
    }

    f = fopen(name, "w");

    if (f == NULL) {
        printf("Cannot create file\n");
    }
    else {
        printf("File created\n");
        fclose(f);
    }
}

void input_cmd(char *name, char *data) {
    FILE *f;

    if (name == NULL || data == NULL) {
        printf("Usage: input filename data\n");
        return;
    }

    f = fopen(name, "a");

    if (f == NULL) {
        printf("Cannot open file\n");
        return;
    }

    fprintf(f, "%s\n", data);
    fclose(f);

    printf("Data added\n");
}

void rename_cmd(char *old, char *new) {
    if (old == NULL || new == NULL) {
        printf("Usage: rename old new\n");
        return;
    }

    if (rename(old, new) == 0) {
        printf("File renamed\n");
    }
    else {
        printf("Rename error\n");
    }
}

void del_cmd(char *name) {
    if (name == NULL) {
        printf("Usage: del filename\n");
        return;
    }

    if (remove(name) == 0) {
        printf("File deleted\n");
    }
    else {
        printf("Delete error\n");
    }
}

void cd_cmd(char *path) {
    if (path == NULL) {
        printf("Usage: cd folder\n");
        return;
    }

    if (chdir(path) != 0) {
        printf("Folder not found\n");
    }
}

int main() {
    char input[MAX];
    char cwd[MAX];

    printf("Simple Shell\n");

    while (1) {
        printf("\n");

        if (getcwd(cwd, MAX) != NULL) {
            printf("%s> ", cwd);
        }
        else {
            printf("> ");
        }

        fgets(input, MAX, stdin);
        input[strcspn(input, "\n")] = '\0';

        if (strlen(input) == 0) {
            continue;
        }

        char *cmd = strtok(input, " ");

        if (strcmp(cmd, "exit") == 0) {
            break;
        }

        else if (strcmp(cmd, "dir") == 0) {
            dir_cmd();
        }

        else if (strcmp(cmd, "create") == 0) {
            create_cmd(strtok(NULL, " "));
        }

        else if (strcmp(cmd, "input") == 0) {
            char *name = strtok(NULL, " ");
            char *data = strtok(NULL, "");

            input_cmd(name, data);
        }

        else if (strcmp(cmd, "rename") == 0) {
            char *old = strtok(NULL, " ");
            char *new = strtok(NULL, " ");

            rename_cmd(old, new);
        }

        else if (strcmp(cmd, "del") == 0) {
            del_cmd(strtok(NULL, " "));
        }

        else if (strcmp(cmd, "cd") == 0) {
            cd_cmd(strtok(NULL, " "));
        }

        else {
            printf("Unknown command\n");
        }
    }

    return 0;
}