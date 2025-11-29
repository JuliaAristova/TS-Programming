let num;
console.log(num);           // undefined
console.log(typeof num);    // undefined

num = 10;
console.log(num);           
console.log(typeof num);    // number

num = "10";
console.log(typeof num);    // string

num = true;
console.log(num);
console.log(typeof num);    // boolean

console.log("***** Type Restriction *****");
//restrict type
let num2: number;
num2 = 10;
//num2 = "10";  - compilation error

console.log(num2);
console.log(typeof num2);   // number

let empName: string;
empName = "Alice";
console.log(typeof empName);

//empName = 100;  - Type 'number' is not assignable to type 'string'.