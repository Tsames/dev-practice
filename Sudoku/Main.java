package Sudoku;

public class Main {
    public static void main(String[] args) {
        Board sudokuGame = new Board();
        sudokuGame.printBoard();
        boolean validBoard = sudokuGame.validate();
        System.out.println(validBoard);
    }
}