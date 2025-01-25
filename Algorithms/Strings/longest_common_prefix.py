'''
Algo Practice: Longest Common Prefix

Problem Prompt
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

Example(s)
Input: strs = ['flower', 'flow', 'flight']
Output: 'fl'

Input: strs = ['dog', 'racecar', 'car']
Output: ''

Signature/Prototype
function longestCommonPrefix(strs)
def longest_common_prefix(strs):
'''

def longest_common_prefix(strs):
    '''
    -> Brute Force method:
    
    Since it is strictly a prefix that we are looking for we can explore each string character by character IN ORDER.
    We would declare an outside variable, res, to hold the prefix all strings have in common, initialized to "".
    We could then iterate through strs once, to find the string with the shortest length and save it to a variable, max.
    We would then iterate max number of times, each time we compare the nth character in each string with the others.
    If they all match, add that character to res and move on to the next iteration, if they don't exit loop and return res.
    
    This would be a O(n * m) where n is the length of strs and m is the length of the shortest string within strs.
    Pretty bad run time.
    
    
    Alternatively, if we find the first and last string in lexographical order we would have the strings that are the most different from one another.
    '''
    
    # If there is only a single string in the strs input, return it
    if len(strs) == 1:
        return strs[0]
    
    # Otherwise, find the first and last strings in lexographical order.
    first = last = strs[0]
    for word in strs:
        if word < first:
            first = word
        if word > last:
            last = word
            
    min_length = min(len(first), len(last))
    i = 0
    while i < min_length and first[i] == last[i]:
        i += 1
    return first[:i]

assert longest_common_prefix(['flower', 'flow', 'flight']) == 'fl', 'Test Case 1 Failed'
assert longest_common_prefix(['dog', 'racecar', 'car']) == '', 'Test Case 2 Failed'
assert longest_common_prefix(['interspecies', 'interstellar', 'interstate']) == 'inters', 'Test Case 3 Failed'
assert longest_common_prefix(['']) == '', 'Test Case 4 Failed'
assert longest_common_prefix(['a']) == 'a', 'Test Case 5 Failed'

'''
Lexographical Order proof of concept.
Is there some case where comparing only the first and last in lexographical order would not work out?

-> What if the first and last in lexographical order are shorter than the rest of the strings?

'aabz'
'aaba'
'aabcd'

Since, lexographical order matches first based on alphabetical order and secondarily measures the length of the string, if the first and last are shorter than the other values, they would necessarily diverge or else the last in lexographical order would be the longer string.

-> What if the first and last in lexographical order are longer than the rest of the strings?

'aabb'
'aac'
'aac'
'aabbccd'

Similarly, this situation is only possible if those other strings have letters later in the alphabet, meaning they do not have a common prefix.

'''