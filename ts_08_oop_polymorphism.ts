import { Rectangle, Circle, Square, Cube, Shape, Volume } from './ts_07_oop_inheritance_abstraction'

let shape: Shape;

shape = new Rectangle(5, 10);
console.log(shape);

shape = new Circle(5);
console.log(shape);

shape = new Square(5);
console.log(shape);

shape = new Cube(5);
console.log(shape);


console.log("-----------");
let shapes: Shape[] = [
    new Rectangle(5, 10),
    new Circle(5),
    new Square(5),
    new Cube(5)
];
console.log(shapes);

console.log("-----------");

for (let shape of shapes) {
    console.log(shape);
    console.log(shape.perimeter());
}