/*  &%&%&%&%&%&%&%&%&%&%&%&%&%&% Notes &%&%&%&%&%&%&%&%&%&%&%&%&%&%

- Run the command "tsc [filename.ts]" to compile our TypeScript file
- Include a tsconfig.json file to provide options to the TypeScript compiler
- If using a tsconfig file use the command tsc rather than tsc [filename.ts]
- async functions typically are not supported by typescript default compiler options
use the target option in tsconfig to target a more modern version of javascript so async works!
- If declare a varialbe without a value or a type declaration it will default to : any type
- There are two different sytax for creating your own types in typescript type and interface
of the two you typically want to use interface becasue you can change it after having declared it.
However, you might want to use the immutable quality of type to your advantage in places.

&%&%&%&%&%&%&%&%&%&%&%&%&%&% @@@@@@@@@ &%&%&%&%&%&%&%&%&%&%&%&%&%&% */

//Typescript types can be declared implicitly or explicitly

// ----- Implicitly -----
//Typescript assigns a number type to myNum because of the data type of the value assigned to the variable
let myNum = 23;

/* So we get an error when we try to assign a string to the same variable
which has implicitly been assigned a number type. */
myNum = 5;


// ----- Explicitly -----
//Rather than having typescript infer the type of our variable we can declare it.
let myString: string;

myString = '23';

//Raises an error
myString = 23;

/* However, in simple cases where the type can be easily inferred by typescript
we don't need to bother explicitly declaring type since that is redundant. */

//Creating your own types (type and interface)

//You can use type or interface to make your own types like so:

interface User {
  id: number,
  name: string
}

const user1: User = {
  id: 0,
  name: 'Tom'
}

//Raises an error
const user2: User = {
  id: 'not a number',
  name: 19
}

// We can also use Unions ( | ) to join multiple types or values together for our new hand-crafted type 

type newType = true | false;
const defactoBoolean: newType = true;

//We can also include specific values in our created types rather than general primitive data types

type specificData = "specific" | "data" | "or" | "bust";
const myWord: specificData = "not specific enough";

