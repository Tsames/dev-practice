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


def isPrime(num: int) -> bool: # O(sqrt(n))
    
    # We want to iterate from 2, because it divisibility by 1 is irrelevant, to the square of num
    # because if num is not cleanly divisible by any other those numbers, it won't be divisible by any
    # number between the square of num and num - 1 as well. So we only have to check the first half of that range.
    for i in range(2, math.sqrt(num)):
        if num % i == 0: return False
    return True