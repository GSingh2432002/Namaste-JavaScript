`Var, Let & Const and Temporal Dead Zone`
/*
Var can be declared and accessed globally.

Let is block scoped to the nearest enclosing block that contains the let statement. It is accessible throughout the entire codebase.

Const creates a variable that cannot be reassigned after it has been assigned a value.

Temporal Dead Zone:-
The phase or region within a scope where variables exist but we cannot access its value. This peculiar state is caused by JavaScript's variable hoisting mechanism.

ReferenceError:-
Suppose you attempt to access a variable before its complete initialization. In such case, JS will throw a ReferenceError.

TypeError:-
The TypeError object represents an error when an operation could not be performed, typically when a value is not of the expected type.

SyntaxError:-
Syntax errors occur when the code has grammatical mistakes.
*/