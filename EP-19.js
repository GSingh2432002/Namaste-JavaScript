`Promises`
/*
What is Promise?
The promise object represents the eventual completion of an asynchronous operation and its resulting value.
A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.
*/
const GITHUB_API = "https://api.github.com/users/gsingh2432002"
const user = fetch(GITHUB_API);