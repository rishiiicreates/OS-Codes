#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t s;
int count = 0;

void* running(void* arg){
	sem_wait(&s);
	count++;

	printf("Thread in CS: count = %d\n", count);
	sem_post(&s);

	return NULL;
}

int main(){

	pthread_t t1, t2;
	sem_init(&s, 0, 1);

	pthread_create(&t1, NULL, running, NULL);
	pthread_create(&t2, NULL, running, NULL);

	pthread_join(t1, NULL);
	pthread_join(t2, NULL);

	sem_destroy(&s);

	return 0;
}
