'''
Find the number of circular primes less than or equal to upper bound.

The number 197 is called a circular prime because all rotations of the digits:
197, 971, and 719 are themselves prime.

There are 13 circular primes between 2 and 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97
 

EXAMPLE(S)
countCircularPrimes(100) == 13


Brainstorm: 
- 3 functions: main function, isPrime function, getRotations function 

high level: 
- iterate through all numbers from 2 to the upper bound
  - call isPrime, if not prime, skip 
  - if isPrime, call getRotations 
    - iteration to determine the startingIndex
    - for each startingIndex, compute the rotation and add to string
    - add our rotation answer to our rotation set 
  - call isPrime for each of our rotations 
  - if all rotations are also prime numbers, increment answer by 1 

FUNCTION SIGNATURE
function countCircularPrimes(upperBound) {
def countCircularPrimes(upperBound: int) -> int:
'''
# O (n * logn * sqrt(n))

def countCircularPrimes(upperBound: int) -> int: # O(n)
    count = 0
    
    for num in range(2, upperBound + 1):
        if not isPrime(num): continue
        
        rotations = getRotations(num)
        circularPrime = True
        for rotation in rotations:
            circularPrime = circularPrime and isPrime(rotation)
        
        if circularPrime: count += 1
    
    return count

def isPrime(num: int) -> bool: # O(sqrt(n))
    
    # We want to iterate from 2, because it divisibility by 1 is irrelevant, to the square of num
    # because if num is not cleanly divisible by any other those numbers, it won't be divisible by any
    # number between the square of num and num - 1 as well. So we only have to check the first half of that range.
    for i in range(2, math.sqrt(num)):
        if num % i == 0: return False
    return True

def getRotations(num: int) -> Set[int]: # ~ O(logn))
    rotations = set()
    digits = str(num)
    
    # Repeat this process for the number of digits in num
    for startingIndex in range(0, len(digits)):
        rotatedNumStr = ""
        
        # Create rotated numbers by adding the character at our the modulus of our
        # Starting place plus the index and the length of digits (so we don't go out of range)
        for i in range(0, len(digits)):
            rotatedNumStr += digits[(startingIndex + i) % len(digits)]
        
        rotations.add(int(rotatedNumStr))
    
    return rotations