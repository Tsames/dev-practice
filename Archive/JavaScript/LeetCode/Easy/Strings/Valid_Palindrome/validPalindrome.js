/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.*/

const validPalindrome = (s) => {

    //Remove Non-word and Numbers
    let cleanString = s.replace(/\W|_/g, '');
    //Remove Casing
    cleanString = cleanString.toLowerCase();

    console.log(cleanString);

    let pointerFront = 0;
    let pointerBack = cleanString.length - 1;

    while (pointerFront <= pointerBack) {
        if(cleanString[pointerFront] !== cleanString[pointerBack]) {
            return false
        }

        pointerFront++;
        pointerBack--;
    }

    return true
}

module.exports = validPalindrome