class employee{
    String name;
    String employeeId;

    public employee(String name, String employeeId){
        this.name = name;
        this.employeeId = employeeId;
    }

    public String getName(){
        return name;
    }

    public String getId(){
        return employeeId;
    }

    public double calculatePayment(){
        return 0.0;
    }
}

class SalariedEmployee extends employee{
    private double monthlysalary;

    public SalariedEmployee(String name, String employeeId, double monthlysalary){
        super(name, employeeId);
        this.monthlysalary = monthlysalary;
    }

    @Override
    public double calculatePayment(){
        return monthlysalary;
    }
}

class HourlyEmployee extends employee{
    private double hourlycharge;
    public int time;

    public HourlyEmployee(String name, String employeeId, double hourlycharge, int time){
        super(name, employeeId);
        this.hourlycharge = hourlycharge;
        this.time = time;
    }

    @Override
    public double calculatePayment(){
        return hourlycharge * time;
    }
}



public class payslipgen {
    
    public static void generatepayslip(employee emp){
        System.out.println("Name:" + emp.getName());
        System.out.println("Id:" + emp.getId());
        System.out.println("Charge: " + emp.calculatePayment());
    }
    public static void main(String[] args){
        SalariedEmployee emp1 = new SalariedEmployee("Zoro", "E001", 80000);
        HourlyEmployee emp2 = new HourlyEmployee("Luffy", "E002", 500, 10);

        generatepayslip(emp1);
        generatepayslip(emp2);
    }    
}
