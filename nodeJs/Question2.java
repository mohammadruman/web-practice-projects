import java.util.*;
class Student {
    int roll = 0;
    String name = "";
    float cgpa = 0;

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + roll);
        System.out.println("CGPA: " + cgpa);
    }
}

public class Question2 {
    static void lowcg(int n, Student objs[]) {
        int low = 0;
        int high = 0;
        for (int i = 1; i < n; i++) {
            if (objs[i].cgpa < objs[low].cgpa)
                low = i;

            if(objs[i].cgpa < objs[low].cgpa)
            high = i;
        }

        System.out.println("Name of student with Lowest CGPA is " + objs[low].name);
        System.out.println("Name of student with Highest CGPA is " + objs[high].name);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no of students: ");
        int n = sc.nextInt();
        int i = 0;

        Student obj[] = new Student[n];
        while(i < n)
        {
            System.out.println("Enter details of Student " + (i+1));
            obj[i].roll = sc.nextInt();
            obj[i].name = sc.nextLine();
            obj[i].cgpa = sc.nextFloat();
            System.out.println();
        }
        i = 0;
        System.out.println("Details Entered is: ");
        while(i < n)
        {
            System.out.println("Student "+(i+1));
            obj[i].display();
            System.out.println();
            i++;
        }

        lowcg(n, obj);
        sc.close();
    }
}