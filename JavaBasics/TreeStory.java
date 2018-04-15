import java.io.*;

public class TreeStory {
  public static void main(String args[]) {
    Console console = System.console();
    String name = console.readLine("Enter your name:  ");
    String adjective = console.readLine("Enter an adjective:  ");
    System.out.printf("%s is very %s", name, adjective);
  }
}
