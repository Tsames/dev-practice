/* 
Implement a function that returns a new object after squashing
the input object into a single level of depth where nested keys
are "squashed" together with a period delimiter (.).

Any keys with null-ish values (null and undefined) are still included in the returned object.
It should also work with properties that have arrays as the value:
*/

function squashObject(obj) {

  const squashedObject = new Object;

  for (let key in obj) {
    if (isObject(obj[key])) {

      const squashedKey = squashObject(obj[key]);
      for (let smallerKey in squashedKey) {
        squashedObject[`${key}${smallerKey != "" && key != "" ? "." : ""}${smallerKey}`] = squashedKey[smallerKey];
      }

    } else {
      squashedObject[key] = obj[key];
    }
  }

  return squashedObject;
}

function isObject(obj) {
  return obj === Object(obj)
}

console.log(Object.entries({a: 1, b: 2, c: {d: 3, e: 4}, f: {g: {i: 5, j: 6}, h: {k: 7, l:8}}}))

module.exports = squashObject;