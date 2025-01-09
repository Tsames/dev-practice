'''
Algo Practice: Move All Zeros in Array

Given an array of integers, move all 0's to the end of the list while maintaining the relative order of the non-zero elements.
Note: that you must do this in-place without making a copy of the array.

Example(s)
**Input:** [0, 1, 0, 3, 1]
**Output:** [1, 3, 1, 0, 0]

**Input:** [0, 5, 3, 0, 2]
**Output:** [5, 3, 2, 0, 0]

Signature/Prototype
def move_all_zeroes(array):
function moveAllZeros(array) {}.
'''

def move_all_zeroes(array):
    next_non_zero = 0
    
    for idx in range(len(array)):
        if array[idx] != 0:
            array[idx], array[next_non_zero] = array[next_non_zero], array[idx]
            next_non_zero += 1
            
    return array


print(move_all_zeroes([0, 1, 0, 3, 12]) == [1, 3, 12, 0, 0]) 
print(move_all_zeroes([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5])   
print(move_all_zeroes([0, 0, 0, 0]) == [0, 0, 0, 0])   
print(move_all_zeroes([0]) == [0])   
print(move_all_zeroes([5]) == [5])   
print(move_all_zeroes([1, 0, 2, 0, 3, 0]) == [1, 2, 3, 0, 0, 0])   
print(move_all_zeroes([0, 0, 1, 2, 3]) == [1, 2, 3, 0, 0])   
print(move_all_zeroes([1, 2, 3, 0, 0]) == [1, 2, 3, 0, 0])   
print(move_all_zeroes([0, 0, 1, 0, 2, 3, 0]) == [1, 2, 3, 0, 0, 0, 0])   
print(move_all_zeroes([]) == [])   
print(move_all_zeroes([0]) == [0])   
print(move_all_zeroes([4, 1, 2, 3]) == [4, 1, 2, 3]) 