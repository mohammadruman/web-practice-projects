import java.util.Scanner;

public class FibonacciSeries {
    public static void main(String[] args) {
        int n, firstTerm = 0, secondTerm = 1;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        n = input.nextInt();
        System.out.print("Fibonacci Series up to " + n + " terms:");
        for (int i = 1; i <= n; ++i) {
            System.out.print(firstTerm + " ");
            int sum = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = sum;
        }
    }
}
// what is byte 4 enter the diffent states of java program
//what is type casting
//