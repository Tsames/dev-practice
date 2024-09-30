from collections import Counter

"""
You have n tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters
printed on those tiles.

Example 1:
Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:
Input: tiles = "AAABBC"
Output: 188

Example 3:
Input: tiles = "V"
Output: 1
 
Constraints:
1 <= tiles.length <= 7
tiles consists of uppercase English letters.
"""

"""
Notably, this problem could boil down to calculating the power set of a set. But because we are using 
characters, we aren't double counting when we have duplicate characters in our string.

We are also excluding counting the possiblity of the empty string.
We are returning the number of possibilites rather than a collection of the possibilities.

Since there is a problem of double counting possibilities due to duplicate character tiles,
I suggest we keep track of the possibilities in a set.
Perhaps there is a better way to avoid this problem, but for no this is a naive solution.
At the end we can simply return the size of our set of unqiue combinations to get the number we want.

We know this is a backtracking problem, which typically suggests recursion.
What is the base case for our recursive function?

We have constructed a string that has the same length as the tiles parameter.
OR, we have added a blank string to the string we are constructing.

For each space, we have m + 1 different options, where m is the number of unique remaining tiles left.


Since each function call should be constructing a unique string, we add one to tile_possibilities every time.

"""


def num_tile_possibilities(tiles: str) -> int:
    letter_counts = Counter(tiles)
    return back_track(letter_counts)


def back_track(letter_counts):
    count = 0

    for letter, freq in letter_counts.items():
        if freq > 0:
            count += 1
            letter_counts[letter] -= 1

            count += back_track(letter_counts)

            letter_counts[letter] += 1

    return count


print(num_tile_possibilities("AAB"))  # Expects 8
print(num_tile_possibilities("AAABBC"))  # Expects 188
print(num_tile_possibilities("V"))  # Expects 1


# Alternate solution with list slicing


def num_tile_possibilities_2(tiles: str) -> int:
    res = set()

    def dfs(path: str, t: str):
        if path not in res:
            if path:
                res.add(path)
            for i in range(len(t)):
                dfs(path + t[i], t[:i] + t[i + 1 :])

    dfs("", tiles)
    return len(res)


print(num_tile_possibilities_2("AAB"))  # Expects 8
print(num_tile_possibilities("AAABBC")) # Expects 188
print(num_tile_possibilities("V")) # Expects 1
