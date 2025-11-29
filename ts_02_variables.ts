/* Explicit typing - you tell TS exactly what type a variable should be
Use explicit types for:
- Function parameters and return types
- Object literals
 - When the initial value might not be the final type
- type annotations - to restrict the type to number
*/

let n: number
n = 10;
//n = "10"; // error: Type 'string' is not assignable to type 'number'.   
console.log(n);
console.log(typeof n);

let studentName: string;
studentName = "John Doe";
console.log(studentName);
console.log(typeof studentName);