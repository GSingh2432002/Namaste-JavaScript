`First Class Function`
/*
1. What is Function Statement/Function declaration?
The function statement declares a function. Function statement must have their name.
eg: 
    function a(){
        console.log("Hello World");
    }

2. What is Function Expression?
Function expression is very similar to and has almost the same syntax as, a function declaration. In addition the function expression dont have function name which is to create anonymouse functions.

3. Difference between Function expression and Function declaration?
The main difference is Hoisting. Function Declaration are hoisted, meaning they can be called before they are declared. Function expression on the other hand are not hoisted, so they cannot be invoked before they are defined. In addition function expression can be anonymous or named, while function declarations must always be named. So basically we can't use function expressions before you create them.
eg:
    a();
    b();
    function a() {
        console.log("a called");
    }

    var b = function() {
        console.log("b called");
    }

Output:
    a called
    TypeError: b is not a function

4. What is Anonymous Function?
It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JS, however, in anonymous functions in JS, we use only the function keyword without the function name. We get syntax error in this function.
eg:
    function() {
        // Function body
    }

5. What is Named Function Expression?
The Function Expression which has a name or identifier is called Named Function Expression. It can be helpful that function's name is bound inside of its body. We can access a function's properties just like any other object by using its name to have it call itself.
eg:
    Var b = function xyz() {
        console.log(xyz);
    }
    xyz();
Output:
    line 41 : function xyz() {
        console.log(xyz);
    }
    line 43 : RefereneError: xyz is not defined in Global Variable.

6. Difference between Parameters and Arguments?
Parameters:- A parameters is a variable in the function definition.
Arguments:- While an argument is the actual value that is passed to the function when it is called.

7. What is First Class Functions?
When functions in a programming language are treated like any other varirable then that programming language is known to have first class functions. It is also known as first class citizens, which means functions can do what any other varibles can.
    As functions are treated like a variable, we can pass them as a parameter to the other function and return the function from another function just like any other variable. Because functions are treated as variables we can store them in any other variabl, objects, and in an array. It simply means first class functions in JS are simply like values or like any other objects in the code.
    eg:
        Assign fn. to a variable:
        const myVariabl = function() {
            //Assigning a function to a variable
            console.log("Inside the function...");
        }
        myVariable(); //Invoking the function using the variable.
*/

