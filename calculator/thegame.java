import java.util.*;
import java.util.Scanner;
import java.util.Collections;

public class MultiPlayerGame {

    public static void main(String[] args) {
        int N = Integer.parseInt(args[0]); // number of players
        int M = Integer.parseInt(args[1]); // points to accumulate
        int[] points = new int[N]; // points of all users
        int[] ranks = new int[N]; // ranks of all users
        boolean[] penalized = new boolean[N]; // whether each user has been penalized

        // assign names to players
        String[] players = new String[N];
        for (int i = 0; i < N; i++) {
            players[i] = "Player-" + (i + 1);
        }

        // randomly assign order of players
        List<Integer> order = new ArrayList<Integer>();
        for (int i = 0; i < N; i++) {
            order.add(i);
        }
        Collections.shuffle(order);

        // play game
        int numPlayersCompleted = 0; // number of players who have completed the game
        int currentPlayerIndex = 0; // index of the current player in the order list
        while (numPlayersCompleted < N) {
            int currentPlayer = order.get(currentPlayerIndex);
            if (points[currentPlayer] >= M) {
                currentPlayerIndex++;
                if (currentPlayerIndex == N) {
                    currentPlayerIndex = 0;
                }
                continue; // skip turn if player has already completed the game
            }

            Scanner scanner = new Scanner(System.in);
            System.out.println(players[currentPlayer] + ", it's your turn (press 'r' to roll the dice)");
            String input = scanner.nextLine();
            if (!input.equals("r")) {
                System.out.println("Invalid input, skipping turn");
                currentPlayerIndex++;
                if (currentPlayerIndex == N) {
                    currentPlayerIndex = 0;
                }
                continue;
            }

            int roll = (int) (Math.random() * 6) + 1;
            System.out.println("You rolled a " + roll);

            if (roll == 6) {
                System.out.println("You get another chance!");
            }

            if (roll == 1 && penalized[currentPlayer]) {
                System.out.println("You rolled a 1 twice consecutively, skipping your turn");
                penalized[currentPlayer] = false;
                currentPlayerIndex++;
                if (currentPlayerIndex == N) {
                    currentPlayerIndex = 0;
                }
                continue;
            } else if (roll == 1) {
                System.out.println("You rolled a 1, next roll will be skipped");
                penalized[currentPlayer] = true;
            } else {
                penalized[currentPlayer] = false;
                points[currentPlayer] += roll;
                if (points[currentPlayer] >= M) {
                    numPlayersCompleted++;
                    ranks[currentPlayer] = numPlayersCompleted;
                    System.out.println(
                            "Congratulations, you have completed the game! Your rank is " + numPlayersCompleted);
                }
            }

            // print current rank table
            System.out.println("Current Rank Table:");
            for (int i = 0; i < N; i++) {
                System.out.println(players[i] + ": " + points[i] + " points, Rank: " + ranks[i]);
            }

            // move to next player
            currentPlayerIndex++;
            if (currentPlayerIndex == N) {
                currentPlayerIndex = 0;
            }
        }

        System.out.println("All players have completed the game!");
    }
}