"""
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters
appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas
"db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.

Example(s)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
  
Each time we encounter a new letter we want to:
    Add it to the list of subsequences
    Add it plus the next letter in the word together, and 
"""

def get_all_subsequences(word: str) -> list[str]:
    subsequences = []
    
    def get_subsequences(word: str, subseq: str, idx: int):
        if len(word) == idx:
            if len(subseq) > 0:
                subsequences.append(subseq)
            return
        
        get_subsequences(word, subseq + word[idx], idx + 1)
        get_subsequences(word, subseq, idx + 1)
    
    get_subsequences(word, "", 0)
    return subsequences
            
        
        
print(get_all_subsequences("hello"))