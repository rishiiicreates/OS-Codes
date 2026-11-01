

public class SumOfNumber{
    public static void main( String[] args){
        int n = 10;
        int sum = 0;
        for(int i = 0; i < n+1; i++){
            sum+=i;
        }
        System.out.println("Sum of numbers: " + sum);
    }
}