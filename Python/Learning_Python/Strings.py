####################################################################################################################################
# - Python has a built-in string class named "str" with many handy features
# - String literals can be enclosed by either double or single quotes,
# - A double quoted string literal can contain single quotes without any fuss (e.g. "I didn't do it") 
# and likewise single quoted string can contain double quotes.
# - String literals inside triple quotes, """ or ''', can span multiple lines of text.
####################################################################################################################################

example_string = 'you can make strings in single, double, or tripple quotes'
# print(example_string.upper())
# print(example_string.lower())

list_of_example_string = example_string.split()
# print(list_of_example_string)
# print(" ".join(list_of_example_string))

####################################################################################################################################
# - Python strings are "immutable" which means they cannot be changed after they are created.
# Since strings can't be changed, we construct *new* strings as we go to represent computed values.
# So for example the expression ('hello' + 'there') takes in the 2 strings 'hello' and 'there' and builds a new string 'hellothere'
####################################################################################################################################

example_string.upper()
# print(example_string)

####################################################################################################################################
# - Characters in a string can be accessed using the standard [ ] syntax beginning with 0.
# - If the index is out of bounds for the string, Python raises an error.
# - The handy "slice" syntax (below) also works to extract any substring from a string
# - The len(string) function returns the length of a string
# - Python newbie gotcha: don't use "len" as a variable name to avoid blocking out the len() function.
####################################################################################################################################

example_string = "1234" # [start (included):end(not included)]
# print(example_string[4]) #Error
# print(example_string[0:2]) #12
# print(example_string[:2]) #if start is ommitted it just begins at the beginning - 12
# print(example_string[0:]) #1234
# print(example_string[0:-1]) #123
# print(example_string[-1]) #4
# print(example_string[1:100]) #1234

####################################################################################################################################
# - The '+' operator can concatenate two strings.
# - Unlike Java, the '+' does not automatically convert numbers or other types to string form.
# - The str() function converts values to a string form so they can be combined with other strings. 
####################################################################################################################################

pi = 3.14
##text = 'The value of pi is ' + pi      ## NO, does not work
text = 'The value of pi is '  + str(pi)  ## yes


