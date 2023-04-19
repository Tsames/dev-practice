/*Before the optional chaining operator (?.) existed, it was sometimes troublesome
to access deeply-nested properties in huge JavaScript objects when some of the
intermediate properties might not be present. 


Doing getFirstName(john) works but getFirstName(jane) will error because the name property
doesn't exist for jane.profile.

Lodash's Get method

Lodash's _.get method was created as a solution for such use cases.

Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

get(object, path, [defaultValue]);
object: The object to query.
path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
defaultValue: Optional parameter. The value returned if the resolved value is undefined.

*/

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function get(object, path, defaultValue = undefined) {

  const newPath = Array.isArray(path) ? path : path.split(".");

  let newObject = object;
  let index = 0;
  let length = newPath.length;

  while (newObject != null && index < length) {
    newObject = newObject[String(newPath[index])];
    index++;
  }

  const value = index === length ? newObject : undefined; 
  return value !== undefined ? value : defaultValue;
}

module.exports = get;