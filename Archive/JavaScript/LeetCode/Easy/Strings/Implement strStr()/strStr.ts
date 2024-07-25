/* Given two strings needle and haystack, return the index of the first occurrence
of needle in haystack, or -1 if needle is not part of haystack. */

function strStr(haystack:string, needle:string) :number {

    let foundAt = 0;
    let matchIndex = 0;

    for(let i=0; i < haystack.length; i++) {

        //Test to see if there is a match at the current index.
        if (haystack[i] === needle[matchIndex]) {
            if (matchIndex === 0) foundAt = i;

            if(matchIndex === 0) console.log(`Starting our match at index ${i}. haystack[${i}] = ${haystack[i]} and needle[${matchIndex}] = ${needle[matchIndex]}.`);
            if (matchIndex !== 0) console.log(`Found a consecutive match at index ${i}. haystack[${i}] = ${haystack[i]} and needle[${matchIndex}] = ${needle[matchIndex]}.`)

            matchIndex += 1;

        //If the current letter of haystack does not match the current letter of needle, see if it matches the first letter of needle
        } else if (haystack[i] === needle[0]) {
            foundAt = i;
            matchIndex = 1;

            console.log(`Did not find a match but did restart a new match at index ${i}.`)

        //Else there is no match
        } else if (needle[matchIndex] === needle[0]) {
            if (needle[matchIndex] === needle[0]) {

            }

            console.log(`No match at index ${i}. Resetting matchIndex. haystack[${i}] = ${haystack[i]} and needle[${matchIndex}] = ${needle[matchIndex]}.`)
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