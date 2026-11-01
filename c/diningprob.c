#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t stick[5];

void* phil(void* arg){

	int i = *(int*)arg;

	if ( i%2 == 0){
		sem_wait(&stick[i]);
		sem_wait(&stick[(i+1) % 5]);
	}else{
		sem_wait(&stick[(i+1) % 5]);
		sem_wait(&stick[i]);
	}

	printf("Philosopher %d is Eating\n", i);

	sem_post(&stick[i]);
	sem_post(&stick[(i+1) % 5]);
	return NULL;
}

int main(){
	
	pthread_t p[5];
	int id[5];

	for (int i = 0; i < 5; i++) sem_init(&stick[i], 0, 1);
	for (int i = 0; i < 5; i++) {
		id[i] = i;
		pthread_create(&p[i], NULL, phil, &id[i]);
	}

	for (int i = 0; i < 5; i++) pthread_join(p[i], NULL);
	return 0;
}

