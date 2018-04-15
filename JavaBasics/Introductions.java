import java.io.Console;

public class Introductions {
  public static void main(String[] args) {
    Console console = System.console();
    // Welcome to the Introductions program!
    // CLI - javac Introductions.java [ALT + C]
    // CLI - java Introductions [ALT + R]
    String firstName = "Jenn";
    console.printf("Hello, my name is %s\n", firstName);
    console.printf("%s is learning how to write Java\n", firstName);
  }
  // public static void main(String args[]) {
  //   System.out.println("Hello");
  // }
}
