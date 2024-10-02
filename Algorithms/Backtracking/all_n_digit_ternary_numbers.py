"""
The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1,
and the hexadecimal system uses the digits 0-9 and the letters A-F.
The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given a number *n*, write a function that generates all *n*-digit ternary numbers.

Example(s)
Numbers starting with zero shouldn't normally be included but the ternary representing
the zero value is a valid 1-digit ternary. No other strings should start with a "0"!

generateNDigitTernaries(1) == ["0","1","2"]
generateNDigitTernaries(2) == ["10","11","12","20","21","22"]


Brainstorming

To generate a n digit ternary number we need to
"""

def generate_all_n_digit_ternary_numbers(digits: int) -> list[str]:
    if digits == 0: return []
    res = []
    
    def generate_permutations(digit: str):
        
        if len(digit) >= digits:
            res.append(digit)
            return
        
        nums = range(1,3) if len(digit) == 0 and digits != 1 else range(3)
        for i in nums:
            generate_permutations(digit + str(i))
            
    generate_permutations("")
    return res

print(generate_all_n_digit_ternary_numbers(0)) # Expects []
print(generate_all_n_digit_ternary_numbers(1)) # Expects ['0','1', '2']
print(generate_all_n_digit_ternary_numbers(2)) # Expects ['10', '11', '12', '20', '21', '22']
print(generate_all_n_digit_ternary_numbers(3)) # Expect ['100', '101', '102', '110', '111', '112', '120', '121', '122', '200', '201', '202', '210', '211', '212', '220', '221', '222']
        