//Question: Write a Java program to compute the arithmetic series of the first $n$ natural numbers: $S = 1 + 2 + 3 + \dots + n$.


public class NaturalNumbers {
    public static void main(String[] args){
        int n = 10;
        int sum = 0;
        for(int i = 1; i <= n; i++){
            sum += i;
        }
        System.out.println("sum of no: "+ sum);
    }    
}
