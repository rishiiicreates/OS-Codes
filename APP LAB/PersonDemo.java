class Person{
    String name;
    int age;

    void introduce(){
        System.out.println("Name: " + name);
        System.out.println("Age" + age);
    }
    
}

public class PersonDemo {
    public static void main(String[] args){
        Person person1 = new Person();
        Person person2 = new Person();

        person1.name = "Rishii";
        person1.age = 19;
        person2.name  = "Shiro";
        person2.age = 10;


        person1.introduce();
        person2.introduce();
    }
}
