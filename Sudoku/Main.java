package Sudoku;

public class Main {
    public static void main(String[] args) {
        Board sudokuGame = new Board();
        sudokuGame.printBoard();
        System.out.println(String.format("Board is valid: %b",  sudokuGame.isValid()));
    }
}