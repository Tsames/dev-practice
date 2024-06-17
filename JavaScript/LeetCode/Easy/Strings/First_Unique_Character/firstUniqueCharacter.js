/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. */

function findUnique(s) {
    const hash = {};
    let pointer = 0;

    for (let i=0; i < s.length; i++) {
        //If the index has a unique character that is not a space - add it to the hash and set the pointer to it.
        if (hash[s[i]] === undefined) {

            // console.log(`New character (${s[i]}) @ index ${i}`);

            hash[s[i]] = 1;

        //If the index has a duplicate character that matches pointer's.
        } else if (hash[s[i]] !== undefined && s[i] === s[pointer]) {

            hash[s[i]] ++;
            // console.log(`Found pointer's duplicate character (${s[i]}) @ index ${i}`);

            //Then move pointer to the next index until we find the next index with a non-duplicate character.
            while ((hash[s[pointer]] !== undefined && hash[s[pointer]] !== 1) && pointer < s.length) {
                pointer ++;
                // console.log(`Looking for new pointer value. Trying ${pointer} where its hash value is ${hash[s[pointer]]}.`)
            }

        //Otherwise if there is a duplicate that doesn't match pointers
        } else {

            hash[s[i]] ++;
            // console.log(`Duplicate character (${s[i]}) @ index ${i}`);

        }
    }

    return pointer < s.length ? pointer : -1;
}

// console.log(findUnique("loveleetcode"));

module.exports = findUnique