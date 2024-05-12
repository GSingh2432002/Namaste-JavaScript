`Functional Programming`
/*
Functional programming in JS is all about treating your code as a set of independent, reusable functions that operate on data without side effects.
eg:
    const radius = [3, 1, 2, 4];

    const area = function(radius){
        return Math.PI * radius * radius;
    };

    const circumference = function(radius){
        return 2 * Math.PI * radius;
    };

    const diameter = function(radius){
        return 2 * radius;
    };

    const calculate = function(radius, logic){
        const output = [];
        for(let i = 0; i < radius.length; i++){
            output.push(logic(radius[i]));
        }
        return output;
    };

    console.log(calculate(radius, area));
    console.log(calculate(radius, circumference));
    console.log(calculate(radius, diameter));
*/