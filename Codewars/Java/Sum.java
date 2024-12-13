package Codewars.Java;

/*
  https://www.codewars.com/kata/55f2b110f61eb01779000053/train/java
  Beginner Series #3 Sum of Numbers

  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
  Your function should only return a number, not the explanation about how you get that number.
*/

public class Sum {
  public static void main(String[] args) {
    System.out.println(getSum(1, 0) == 1);
    System.out.println(getSum(1, 2) == 3);
    System.out.println(getSum(0, 1) == 1);
    System.out.println(getSum(1, 1) == 1);
    System.out.println(getSum(-1, 0) == -1);
    System.out.println(getSum(-1, 2) == 2);
  }

  public static int getSum(int a, int b) {
    int sum = 0;

    for (int i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }

    return sum;
  }
}
