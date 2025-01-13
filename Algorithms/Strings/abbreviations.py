'''
An abbreviation is a shortened version of a word that conforms to the following rules:
- the abbreviation is shorter than the original
- the abbreviation starts with the same first letter as the original
- the abbreviation cannot add extra instances of letters in the original

Write a function that takes a word and a candidate abbreviation and returns true if the abbreviation is valid according to these rules.

Example(s)
valid_abbreviation("integer", "int") -> True
valid_abbreviation("float", "flt") -> True
valid_abbreviation("double", "dbbl") -> False
valid_abbreviation("character", "char") -> True
'''
from collections import Counter

def valid_abbreviation(word, abbrev):
    # length of abbrev must be sorter than the length of word
    if len(abbrev) > len(word):
        return False
    # The first letter of abbrev must match the first letter of word
    if abbrev[0] != word[0]:
        return False
    # The count for any given in letter in abbrev must not exceed the count for the matching letter in word
    count_abbrev = Counter(abbrev)
    count_word = Counter(word)
    
    for key, value in count_abbrev.items():
        if count_word[key] < value:
            return False
        
    return True

print(valid_abbreviation("integer", "int") == True)
print(valid_abbreviation("float", "flt") == True)
print(valid_abbreviation("double", "dbbl") == False)
print(valid_abbreviation("character", "char") == True)

def better_valid_abbreviation(word, abbrev):
    # length of abbrev must be sorter than the length of word
    if len(abbrev) > len(word):
        return False
    # The first letter of abbrev must match the first letter of word
    if abbrev[0] != word[0]:
        return False
    # The count for any given in letter in abbrev must not exceed the count for the matching letter in word
    w, a = 0, 0
    
    while w < len(word) and a < len(abbrev):
        if word[w] == abbrev[a]:
            a += 1
        w += 1
        
    return a == len(abbrev)

print(better_valid_abbreviation("integer", "int") == True)
print(better_valid_abbreviation("float", "flt") == True)
print(better_valid_abbreviation("double", "dbbl") == False)
print(better_valid_abbreviation("character", "char") == True)