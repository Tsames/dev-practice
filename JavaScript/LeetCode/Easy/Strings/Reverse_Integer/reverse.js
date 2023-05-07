/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x 
causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/

const reverse = (x) => {
    let output = "";
    let temp = x.toString()
    for (let i=temp.length - 1; i >= 0; i--) {
        if (temp[i] === "-") {
            output = temp[i] + output;
        } else {
            output += temp[i];
        }
    }

    if ((Number(output) < -2147483648) || (Number(output) > 2147483647)) {
        return 0;
    } else {
        return Number(output);
    }
}

module.exports = reverse