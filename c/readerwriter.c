#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t r, w;
int rcount = 0, val = 10;

void* writer(void* arg){
	sem_wait(&w);
	val += 5;

	printf("Writer update: %d\n", val);
	sem_post(&w);

	return NULL;
}

void* reader(void* arg){
	sem_wait(&r);
	rcount++;
	if(rcount == 1) sem_wait(&w);
	sem_post(&r);

	printf("Reader read: %d\n", val);

	sem_wait(&r);
	rcount--;
	if (rcount == 0) sem_post(&w);
	sem_post(&r); 

	return NULL;
}

int main() {
	pthread_t r, wr;

	sem_init(&r, 0, 1);
	sem_init(&w, 0, 1);

	pthread_create(&wr, NULL, writer, NULL);
	pthread_create(&r, NULL, reader, NULL);

	pthread_join(wr, NULL);
	pthread_join(r, NULL);

	return 0;
}

