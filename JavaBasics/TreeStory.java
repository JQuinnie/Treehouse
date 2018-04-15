import java.io.*;

public class TreeStory {
  public static void main(String args[]) {
    Console console = System.console();
    // integer restriciton
    String ageAsString = console.readLine("How old are you?  ");
    int age = Integer.parseInt(ageAsString);
    if (age < 13) {
      // Exit code below
      console.printf("Sorry, you must be at least 13 to use this program.\n");
      System.exit(0);
    }
    String name = console.readLine("Enter a name:  ");
    String adjective = console.readLine("Enter an adjective:  ");
    String noun = console.readLine("Enter a noun:  ");
    String adverb = console.readLine("Enter an adverb:  ");
    String verb = console.readLine("Enter a verb ending in -ing:  ");
    console.printf("Your TreeStory:\n------------\n");
    console.printf("%s is a(n) %s %s. ", name, adjective, noun);
    console.printf("They are always %s %s.\n", adverb, verb);
  }
}
