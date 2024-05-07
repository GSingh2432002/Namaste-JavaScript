`Scope Chain, Scope & Lexical Environment`
/*
Scope Chain:-
Scope Chain means that one variable has a scope is used by another variable or function having another scope. This complete chain formation goes on and stops when their is end of global scope.
Or
In simple words, JavaScript looks for variables in a way, If it cant find a variable in its local Execution Context, it will look for it in its calling context. And if not found in its calling context. Repeatedly, until it is looking in global execution context. And if it does not fin then, its undefined.

Scope:-
Scope is the way of accessing variables, functions, and objects in some particular part of your code during runtime

Lexical Scope:-
In a nested group of functions, accessing the variables which are declared outside the function call is lexical scoping also referred to as static scope.
*/