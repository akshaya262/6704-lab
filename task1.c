#include <stdio.h>
#include <string.h>

int main() {
    char data[] = "HELLO";
    int count = strlen(data);

    printf("Character count = %d\n", count);
    printf("Frame = %d%s\n", count, data);

    return 0;
}