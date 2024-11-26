'''
Given three distinct words, determine if the third word is potentially a portmanteau of the first two.

A portmanteau (https://en.wikipedia.org/wiki/Portmanteau) is a word that is made by taking the start of one word and the end of another and mashing them together. Brunch is a great example, combining the first 2 letters of "breakfast" with the last 4 of "lunch".

Compound words aren't considered portmanteaus, so "football" is not a portmanteau of "foot" and "ball". At least one of the two words needs to be truncated.
 

EXAMPLE(S)
isPortmanteau("smoke", "fog", "smog") == True (sm + og)
isPortmanteau("snake", "fog", "smog") == False
isPortmanteau("lunch", "breakfast", "brunch") == True (br + unch)
isPortmanteau("shrink", "inflation", "shrinkflation") == True (shrink + flation)
isPortmanteau("foot", "ball", "football") == False
 

FUNCTION SIGNATURE
function isPortmanteau(word1, word2, proposed) {
def isPortmanteau(word1: str, word2: str, proposed: str) -> bool:


If the third word is as long as the two inputs then return false

left and right pointers = 0, len(thirdword) - 1
'''

def isPortmanteau(word1: str, word2: str, proposed: str) -> bool:
  def check(w1: str, w2: str):
    p1 = 0
    while p1 < len(w1) and p1 < len(proposed) and proposed[p1] == w1[p1]:
      p1 += 1
    p1 -= 1 # the loop iterated 1 too far

    p2 = len(proposed) - 1
    s2 = len(w2) - 1
    while s2 >= 0 and proposed[p2] == w2[s2]:
      s2 -= 1
      p2 -= 1

    return p1 >= p2 and p2 < len(proposed) - 1

  # Rule out compounds
  if proposed == word1 + word2: return False
  if proposed == word2 + word1: return False

  # The portmanteau can't exactly match either source word
  if proposed == word1 or proposed == word2: return False

  return check(word1, word2) or check(word2, word1)