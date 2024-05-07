`Window and this Keyword`
/*

Global:-
The window object is an object that always exists in global scope.The global variable can accessed anywhere in project by using 'this' keyword.

Window:-
When you run javascript inside the browser it creates a javascript object named as "Window". This is the global object of javascript. Whatever you create function or variables that all attached to this "window".

* Global variables are properties of the window object.

* Global functions are methods of the window object.

this:-
this keyword refers to an object, that object which is executing the current bit of javascript code. In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.

eg:-
var x = 10;
function demo(x1){
    var x = 0;
    x = x1;
    alert(x);
}
demo(20);
alert(this.x);

Output:-
20
10
* Here is demo(20); is the function scope and alert(this.x); is global browser window.

*/