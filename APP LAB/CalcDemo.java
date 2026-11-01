class Calculator{
    public int add(int n, int m){
        return n+m;
    }
    public double add(double n, double m){
        return n+m;
    }

    public int sub(int n, int m){
        return n-m;
    }
    public double sub(double n, double m){
        return n-m;
    }

    public int mul(int n, int m){
        return n*m;
    }
    public double mul(double n, double m){
        return n*m;
    }

    public int div(int n, int m){
        if ( m != 0){
            return n/m;
        } else {
            System.out.println("Not Possible !!");
            return -1;
        }
    }

    public double div(double n, double m){
        if ( m != 0){
            return n/m;
        } else {
            System.out.println("Not Possible !!");
            return -1;
        }
    }
}

public class CalcDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(10, 20));
        System.out.println(calc.add(10.50, 20.5));
    }
}