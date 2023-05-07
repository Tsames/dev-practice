/* Given two strings needle and haystack, return the index of the first occurrence
of needle in haystack, or -1 if needle is not part of haystack. */
function strStr(haystack, needle) {
    var foundAt = 0;
    var matchIndex = 0;
    for (var i = 0; i < haystack.length; i++) {
        //Test to see if there is a match at the current index.
        if (haystack[i] === needle[matchIndex]) {
            if (matchIndex === 0)
                foundAt = i;
            matchIndex += 1;
            //If the current letter of haystack does not match the current letter of needle, see if it matches the first letter of needle
        }
        else if (haystack[i] === needle[0]) {
            foundAt = i;
            matchIndex = 1;
            //Else there is not match
        }
        else {
            matchIndex = 0;
        }
        //If matchIndex is as long as needle then return foundAt.
        if (matchIndex === needle.length) {
            return foundAt;
        }
    }
    return -1;
}
console.log(strStr("mississippi", "issip"));
module.exports = strStr;
