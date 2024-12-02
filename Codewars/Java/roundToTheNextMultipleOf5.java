package Codewars.Java;
/*
https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/java

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.≈
*/

public class roundToTheNextMultipleOf5 {

  public static void main(String[] args) {
    System.out.println(roundToNext5(2));  // Should print 5
    System.out.println(roundToNext5(12)); // Should print 15
    System.out.println(roundToNext5(-2)); // Should print 0
  }

  public static int roundToNext5(int number) {
    while (number % 5 != 0) {
      number++;
    }
    return number;
  }
}

