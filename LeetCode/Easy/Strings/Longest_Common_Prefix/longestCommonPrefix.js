/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".*/

//Messy Solution
const longestCommonPrefix = (strs) => {
    let shortest = 0;

    for (let i=0; i < strs.length; i++) {
        if (strs[i].length < strs[shortest].length) {
            shortest = i;
        }
    }

    // console.log(`The shortest string in strs is ${strs[shortest]}.`);
    let prefix = strs[shortest];

    for (let j=0; j < strs.length; j++) {
        // console.log(`Iterating at index ${j}. The prefix is ${prefix} at this moment.`)
        for (k=prefix.length - 1; k >= 0; k--) {
            // console.log(`Comparing ${prefix[k]} with ${strs[j][k]}.`)
            if (prefix[k] !== strs[j][k]) {
                // console.log(`Removing ${prefix[k]} from the prefix.`)
                prefix = prefix.substring(0,k);
            }
        }
    }

    // console.log(`The shortest common prefix is ${prefix}.`)
    return prefix;
}

longestCommonPrefix(["flower","flow","flight", "corn"]);

module.exports = longestCommonPrefix