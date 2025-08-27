//addition

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3));
//console.log(add());   // does not compile
//add(5, "3");   // does not compile

//default parameters
function subtract(a: number = 0, b: number = 0): number {
    return a - b;
}
console.log(subtract(5, 3));
console.log(subtract());

// optional parameter
function multiply(a: number, b: number, c: number = 1): number {
    return a * b * c;
}
console.log(multiply(5, 3));
console.log(multiply(5, 3, 2));