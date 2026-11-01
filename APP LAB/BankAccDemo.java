
class BankAcc{
    String accNumber;
    String accHolder;
    double balance;

    void deposit(double n){
        balance += n;
    }

    void withdraw(double n){
        if ( n > balance){
            System.out.println("Money can't we withdraw");
        } else {
            balance -= n;
        }
    }

    void display(){
        System.out.println("Account Number: " + accNumber);
        System.out.println("Account Holder: " + accHolder);
        System.out.println("Balance: " + balance);
    }
}

public class BankAccDemo {
    public static void main(String[] args){
        BankAcc acc1 = new BankAcc();
        acc1.accHolder = "Rishii";
        acc1.accNumber = "021";
        acc1.balance = 10;


        acc1.deposit(90);
        acc1.display();
        acc1.withdraw(50);
        acc1.display();
    }
}
