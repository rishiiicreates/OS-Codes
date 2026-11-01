class MyThread implements Runnable{
    @Override
    public void run(){
        for(int i = 0; i < 5; i++){
            System.out.println("Thread " + Thread.currentThread().getId() + " : Count " + i);
        }
    }
}

public class multithreading_runnable {
    public static void main(String[] args){
        MyThread thread = new MyThread();
        Thread thread1 = new Thread(thread);
        Thread thread2 = new Thread(thread);

        thread1.start();
        thread2.start();
    }
}
