/* Implement a function flatten that returns a newly-created
array with all sub-array elements concatenated recursively into a single level.*/

function flatten(value) {

  let outputArray = [];

  for(let i=0; i < value.length; i++) {
    if (Array.isArray(value[i]) === true) {
      const subArray = flatten(value[i]);
      subArray.forEach((element) => {outputArray.push(element)});
    } else {
      outputArray.push(value[i]);
    }
  }

  return outputArray
}

module.exports = flatten;