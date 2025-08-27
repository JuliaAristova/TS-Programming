function sum(a, b) {
    return a + b;
}

//JS - cannot restring types of arguments

console.log(sum(5, 10));        //15
console.log(sum());             //NaN
console.log(sum(1, "2"));       //12 concatination
console.log(sum("1", 2));       //12