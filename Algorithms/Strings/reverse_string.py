"""
Q. Given a string, reverse the string word by word.
* Remove any extra white space (e.g. "b a" -> "a b" // only keep 1 whitespace)
* Remove any leading or trailing white spaces (e.g. " Hi " -> "Hi")
"""


def solution(string):
    words = string.split()

    words = words[::-1]

    return " ".join(words)
