class MyThread extends Thread{
    @Override 
    public void run(){
        for(int i = 0; i < 5; i++){
            System.out.println("Current Thread: " + Thread.currentThread().getId() + " count " + i);
        }
    }
}
public class multithreading {
    public static void main(String[] args){
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();
        thread1.start();
        thread2.start();
    }
}
