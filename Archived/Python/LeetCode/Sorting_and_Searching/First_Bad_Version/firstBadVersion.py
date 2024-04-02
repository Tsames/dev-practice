from math import floor

# You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check.
# Since each version is developed based on the previous version, all the versions after a bad version are also bad.
# Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
# You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version.
# You should minimize the number of calls to the API.

 
# Example 1:

# Input: n = 5, bad = 4
# Output: 4
# Explanation:
# call isBadVersion(3) -> false
# call isBadVersion(5) -> true
# call isBadVersion(4) -> true
# Then 4 is the first bad version.

# Example 2:
# Input: n = 1, bad = 1
# Output: 1

 
# Constraints:
#     1 <= bad <= n <= 231 - 1

def isBadVersion(n):
    return True if n >= 4 else False

def firstBadVersion(n):
    return recursiveHelper(list(range(1,n+1)))

def recursiveHelper(array):

    if (len(array) == 1 and isBadVersion(array[0])):
        print(f"Found final result: {array[0]}.")
        return array[0]
    elif (len(array) == 1 and not isBadVersion(array[0])):
        print(f"There are no bad versions.")
        return None

    #Find Midpoint of Array
    pivot = floor((len(array) - 1 )/2)
    print(f"Iterating on {array} with midpoint: {array[pivot]}")

    #If array @ Midpoint satisfies isBadVersion - call recursive function on lower half of array including midpoint
    if (isBadVersion(array[pivot])):
        print(f"{array[pivot]} satisfies.")
        return recursiveHelper(array[:pivot + 1])
    #If array @ Midpoint does not satisfy isBadVersion - call recursive function on upper half of array excluding midpoint
    else:
        print(f"{array[pivot]} does not satisfy.")
        return recursiveHelper(array[pivot + 1:])


print(firstBadVersion(5))