`Async Await`
/*
What is async?
An async function declaration creates an Async Function object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by async function, or rejected with an exception uncaught within the async function.
    The await keyword is only valid inside async functions within regular JS code. If you use it outside of an async functions body you will get a syntaxError.
        Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will implicitly wrapped in a promise.

What is await?
The await operator is used to wait for a promise and get its fulfillment value.Await is a keyword is only be used in a async function.
*/