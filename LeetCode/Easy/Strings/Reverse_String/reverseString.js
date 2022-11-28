/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

/* The Intuitive Solution (however it uses more that O(1) extra memory)

const reverseString = (s) => {
    if (s.length <= 1) {
        return s
    }

    let output = []

    for (let i = s.length - 1; i >= 0; i--) {
        output.push(s[i])
    }

    return output;
} */

//Using a Two pointer approach

const reverseString = (s) => {
    if (s.length <= 1) {
        return s
    }

    pointerFront = 0;
    pointerBack = s.length - 1;

    //Loop until the pointers are either pointing at the same letter or until the front pointer passes the back pointer
    while(pointerFront < pointerBack) {

        //Swap the elements located at the two seperate pointers within the given array
        let temp = s[pointerFront];
        s[pointerFront] = s[pointerBack];
        s[pointerBack] = temp;

        //Increment/Decrement the appropriate pointer
        pointerFront ++;
        pointerBack --;
    }

    return s;
}

module.exports = reverseString