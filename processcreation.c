#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>


int main(){
	if(fork() == 0){
		printf("Child PID: %d, Parent PID: %d\n", getpid(), getppid());
	} else {
		wait(NULL);
		printf("Parent PID: %d\n", getpid());
	}
	return 0;
}
