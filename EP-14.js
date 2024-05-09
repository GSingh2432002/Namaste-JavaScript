`Asynchronous & Event Loop`
/*
How JS code will Execute?
Browser
JS Engine
Call Stack

Callback Queue consist of setTimeout(), DOM API's, console. Thus it is given less priority then Microtask Queue/Priority Queue

Microtask Queue/Priority Queue must be given higher priority than the Callback Queue as well as it consist of Callback function based on Promises and Mutation Observer.
*/