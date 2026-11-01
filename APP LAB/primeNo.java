public class primeNo {
    public static void main(String[] agrs){
        
        int limit = 50;

        System.out.print("Prime Number up to " + limit + "are:");

        for(int i = 2; i <= limit; i++){
            boolean isPrime = true;
            for(int j = 2; j<= Math.sqrt(i); j++){
                if(i % j == 0){
                    isPrime = false;
                    break;
                }

            }
            if (isPrime){
                System.out.println( i + " ");
            }
        }
        System.out.println();
    }    
}
