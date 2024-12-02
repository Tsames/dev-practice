package Codewars.Java;
/*
https://www.codewars.com/kata/56747fd5cb988479af000028/train/java

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
*/

public class getMiddleCharacter {

  public static void main(String[] args) {
    System.out.println(getMiddle("test"));  // Should print "es"
    System.out.println(getMiddle("hamburger")); // Should print "u"
    System.out.println(getMiddle("ere")); // Should print "r"
  }

  public static String getMiddle(String word) {
    String s = "";
    int length = word.length();
    int half = length / 2;

    if (length % 2 == 0) {
        s = word.substring(half - 1, half + 1);
    } else {
        s = word.substring(half, half + 1);
    }

    return s;
  }
}