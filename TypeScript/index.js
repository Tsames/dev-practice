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
myNum = "23";
// ----- Explicitly -----
//Rather than having typescript infer the type of our variable we can declare it.
let myString;
myString = '23';
//Raises an error
myString = 23;
const user1 = {
    id: 0,
    name: 'Tom'
};
//Raises an error
const user2 = {
    id: 'not a number',
    name: 19
};
const defactoBoolean = true;
const myWord = "not specific enough";
