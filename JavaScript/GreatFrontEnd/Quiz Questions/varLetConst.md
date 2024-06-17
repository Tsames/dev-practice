# "What are the differences between variables created using `let`, `var` or `const`?"

- 1: Let and const are scoped to the block that they are declared within. This means if they are declared within an
if/else conditional block or a for loop they cannot be used outside that scope.
Whereas var is scoped to the function it is created within, or if there is no function, the global object.

- 2: Var allows variables to be hoisted (used in the code before they are declared), whereas const and let do not.

- 3: Redeclaring (rewriting the initial declaration of the variable e.g. let example = true) will result in an error when written
with let and const, but not with var.

- 4: Variables declared with let can be reassigned another value, whereas those with const cannot.