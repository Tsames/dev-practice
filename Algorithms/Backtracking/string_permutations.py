"""
Given a set of characters, a minimum length, and a maximum length,
generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities.
You should be able to get this to either time out or run out of memory even on rather small lengths.
Try it! It's a fun demonstration of the exponential nature of some decision trees.

Example(s)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]
"""

letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

def generate_all_string_permutations(characters: list[str], min: int, max: int) -> list[str]:
    res = []
    
    def new_permutation(sequence: str):
        if len(sequence) > max:
            return
        
        if len(sequence) > min:
            res.append(sequence)
            
        for i in range(len(characters)):
            new_permutation(sequence + characters[i])
    
    new_permutation("")
    return res

print(generate_all_string_permutations(["a","b","c"], 1, 3))

