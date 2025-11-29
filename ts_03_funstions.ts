/*
TS
function functionName (parameter1: type, parameter2: type): returnType {
*/

//addition of two numbers

export function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3));
//console.log(add());   // does not compile
//add(5, "3");          // does not compile - argument of type 'string' is not assignable to parameter of type 'number'

//default parameters
export function subtract(a: number = 0, b: number = 0): number {
    return a - b;
}
console.log(subtract(5, 3));    //2
console.log(subtract());        //0 - uses default values

//console.log(subtract(5, 3, 2)); //compilation error - too many arguments


// optional parameter
export function multiply(a: number, b: number, c: number = 1): number {
    return a * b * c;
}
console.log(multiply(5, 3));
console.log(multiply(5, 3, 2));
