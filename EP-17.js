`Map, Filter & Reduce`
/*
Map:-
map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array.map() returns the new array, and the original array is unchanged.
eg:-
    const arr = [5,1,3,2,6];

    function double(x){
        return x * 2;
    }
    const output = arr.map(double);
    console.log(output);

Filter:-
The JavaScript filter array function is used to filter an array based on specified criteria. After filtering it returns an array with the values that pass the filter. The JavaScript filter function iterates over the existing values in an array and returns the values that pass.
eg:-
    const arr = [5,1,3,2,6];
    
    function isOdd(x){
        return x % 2;
    }
    const output = arr.filter(isOdd);
    console.log(output);

Reduce:-
The JS arr.reduce() method in JS is used to reduce the array to a single value and executes a provided function for each value of the array and the return value of the function is stored in an accumulator.
The reduce function takes the first argument as a function and second argument as any initial value to pass inside the accumulator. The JS array reduce method returns a single value/element after traversing the complete array.
eg:-
    const arr = [5,1,3,6,7]
    const output = arr.reduce(function(acc, curr) {
        acc = acc + curr;
        return acc;
    }, 0);
    console.log(output);
*/

