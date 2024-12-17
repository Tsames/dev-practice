package Codewars.Java;

/*
https://www.codewars.com/kata/5208f99aee097e6552000148/solutions

Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

public class breakCamelCase {
    public static void main(String[] args) {
        System.out.println(breakCase("camelCasing"));
        System.out.println(breakCase("identifier"));
        System.out.println(breakCase(""));
    }

    public static String breakCase(String input) {
        String output = "";

        for (int i = 0; i < input.length(); i++) {
            output = Character.isUpperCase(input.charAt(i)) ? output + " " + input.charAt(i) : output + input.charAt(i);
        }

        return output;
    }
}
