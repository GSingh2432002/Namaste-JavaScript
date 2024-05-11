`Asynchronous & Event Loop`
/*
How JS code will Execute?
Browser
JS Engine
Call Stack

Callback Queue consist of setTimeout(), DOM API's, console. Thus it is given less priority then Microtask Queue/Priority Queue

Microtask Queue/Priority Queue must be given higher priority than the Callback Queue as well as it consist of Callback function based on Promises and Mutation Observer.

Event Loop:-
JavaScript event loop is core mechanism that enables asynchronous operations. Though single-threaded, it manages tasks efficiently. Imagine it as a queue system: events like user interactions or network requests are added to the queue, an the engine processes them one by one.
Single-threaded means that main thread where JS code is run, runs in one line at a time manner and there is no possibility of running code in parallel.

How to Event Loops work?
1. Call Stack: 
JavaScript uses a call stakc to keep track if the currently executing function.

2. Callback Queue:
Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions are placed in the callback queue.

3.Event Loop:
The event looop continuosly checks the call stack and callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it into the call stack for execution.

4. Execution:
The function of the top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.

5. Callback Execution:
When an asynchronous operation is complete, its callback is placed in the callback queue.

6. Repeat:
The event loop continues this process, ensuring that the call stack is always empty before taking the nect function from the callback queue.
*/