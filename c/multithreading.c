#include <stdio.h>
#include <pthread.h>

void* run(void* arg){
	printf("Running Thread %s\n", (char*)arg);
	return NULL;
}

int main(){
	pthread_t t1, t2;

	pthread_create(&t1, NULL, run, "1");
	pthread_create(&t2, NULL, run, "2");

	pthread_join(t1, NULL);
	pthread_join(t2, NULL);

	return 0;
}


