//Instructions:

// This recursive function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"

//Solution
function coinFlips(n) {
  let output = [];

  function helper(outcome="", flip="") {
    outcome = outcome + flip

    if (outcome.length == n) {
      output.push(outcome);
      return
    }

    helper(outcome, flip="H");
    helper(outcome, flip="T");
  }

  helper();
  return output
}


//Tests
//Expected Output - [HH, HT, TH, TT]
console.log(coinFlips(2));
//Expected Output - [HHHH, THHH, HTHH, HHTH, HHHT, TTHH, THTH, THHT ...]
console.log(coinFlips(4));