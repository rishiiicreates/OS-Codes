#include <stdio.h>
#include <stdlib.h>


# define SIZE 6

int top = -1;
int arr[SIZE];


void push(int x){
	if (top == SIZE - 1) {
		printf("\nOverFlow...\n");
	}else{
		top = top + 1;
		arr[top] = x;
	}
}

void pop(){
	if (top == -1){
		printf("\nUnderFlow...\n");
	}else{
		top = top - 1;
	}
}

void show(){
	for ( int i = top; i >= 0; i--){
		printf("%d\n", arr[i]);
	}
}

int main(){
	push(10);
	push(20);
	push(30);
	push(40);
	push(50);
	show();
	pop();
	pop();
	show();
	return 0;
}

