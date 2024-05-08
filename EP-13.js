`Callback Functions & Event Listeners`
/*
Callback Functions:-
A callback is function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and whe nthe main function is finished, it calls the callback function to provide a result. Callbacks allow you to handle the results of an asysnchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.
eg:
    setTimeout(function () {
    console.log("I am a callback function");
    }, 6000);

    function x(y){
        console.log("X");
        y();
    }
    x( function y(){
        console.log("Y");
    });

Event Listeners:-
An event listener is a function in JS that waits for an event to occur then reponds to it.
eg:
    document.getELementById("ClickMe").addEventListener("Click", function xyz(){
        console.log("Button Clicked");
    });
    // It will pick up this element "ClickMe" button and add Event Listener to "ClickMe" and that event is click. After that if the event occurs then the callback function is being called.
*/
