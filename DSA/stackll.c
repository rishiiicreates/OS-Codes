#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* next;
};

struct Node *head = NULL;

void push(int x){
	
	struct Node* newnode = malloc(sizeof(struct Node));

	if(newnode == NULL){
		printf("Heap OverFlow...\n");
		return;
	}

	newnode->data = x;
	newnode->next = head;
	head = newnode;
}

void pop(){
	struct Node* temp = head;
	if (head == NULL){
		printf("Stack is empty\n");
	}else{
		printf("Element Deleted: %d\n", head->data);
		head = head->next;
		free(temp);
	}
}

void peek() {
	if (head == NULL){
		printf("Stack is Empty\n");
	}else{
		printf("%d\n", head->data);
	}
}

void display() {
	struct Node* temp = head;
	if(head == NULL) {
		printf("Stack is Empty\n");
	}else{
		printf("Stact Elements:\n");
		while ( temp!= NULL){
			printf("%d\t", temp->data);
			temp = temp->next;
		}
		printf("\n");
	}
}


int main(){
	push(2);
	push(3);
	push(10);
	push(30);
	peek();
	pop();
	display();
	return 0;
}


