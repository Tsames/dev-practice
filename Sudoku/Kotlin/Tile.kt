package Sudoku;

class Tile (val id: Int, val square: Int, val column:Int, val row:Int) {
    private val possibleValues: MutableSet<Int> = mutableSetOf(1,2,3,4,5,6,7,8,9)
    private var _value: Int = 0
    private var display: Boolean = false

    val value: Int
        get() = _value

    fun addPossibleValue(value:Int) {
        if (value in 1..9) {
            possibleValues.add(value)
        }
    }

    fun removePossibleValue(value:Int) {
        possibleValues.remove(value)
    }

    fun resetValue(): Int {
        println(
            "Resetting the value of Tile[$id] @ position $column in row $row "
        )
        val tempValue = value
        value = 0
        return tempValue
    }

    fun pickValue(): Int? {
        if (possibleValues.isEmpty()) {
            println("No possible values for Tile[$id] @ position $column in row $row.")
            return null
        }

        if (value != 0) {
            println("Value is already set: $_value. Cannot pick a value while one is already assigned.")
            return null
        }

        val randomValidValue = possibleValues.random()
        value = randomValidValue
        possibleValues.remove(randomValidValue)

        println("Selected $_value as a value for Tile[$id] @ position $column in row $row")

        return randomValidValue
    }

    fun reset() {
        value = 0
        for (i in 1..9) {
            possibleValues.add(i)
        }
        display = true
    }

    override fun toString(): String {
        return "Tile[$id] @ Square: $square / Row: $row / Column: $column -- Value: $_value"
    }
}
