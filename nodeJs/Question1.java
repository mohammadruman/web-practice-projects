class Account {
    int acc_no;
    double balance;

    public Account(int acc_no, double balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }

    public void display() {
        System.out.println("Account Number: " + acc_no);
        System.out.println("Balance: " + balance);
    }
}

class Person extends Account {
    String name;
    String aadhar_no;

    public Person(int acc_no, double balance, String name, String aadhar_no) {
        super(acc_no, balance);
        this.name = name;
        this.aadhar_no = aadhar_no;
    }

    @Override
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Aadhar Number: " + aadhar_no);
        super.display();
    }
}

public class Question1 {
    public static void main(String[] args) {
        Person person1 = new Person(123456, 5000, "John Doe", "1234 5678 9012");
        Person person2 = new Person(789012, 10000, "Jane Doe", "3456 7890 1234");
        Person person3 = new Person(345678, 15000, "Bob Smith", "5678 9012 3456");

        person1.display();
        System.out.println();
        person2.display();
        System.out.println();
        person3.display();
    }
}
