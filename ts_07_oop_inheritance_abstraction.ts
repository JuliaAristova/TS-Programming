export interface Volume {
    volume(): number;

}
//abstract class to define abstract methods for area and perimeter 
// common for all classes that inherit from Shape 
export abstract class Shape {
    public abstract area(): number;
    public abstract perimeter(): number;
}

// concrete class to inherit from Shape and implement area and perimeter methods
export class Rectangle extends Shape {
    public width !: number;
    public height !: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    public area(): number {
        return this.width * this.height;
    }
    public perimeter(): number {
        return 2 * (this.width + this.height);
    }

}

// concrete class to inherit from Shape and implement area and perimeter methods
export class Circle extends Shape {
    public radius !: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    public area(): number {
        return 2 * Math.PI * this.radius * this.radius;
    }
    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// concrete class to inherit from Shape and implement area and perimeter methods
export class Square extends Shape {
    public side !: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    public area(): number {
        return this.side * this.side;;
    }
    public perimeter(): number {
        return 4 * this.side;;
    }
}
export class Cube extends Shape implements Volume {
    public side!: number;
    constructor(side: number) {
        super();
        this.side = side;
    }

    public volume(): number {
        return Math.pow(this.side, 3);
    }
    public area(): number {
        return 6 * Math.pow(this.side, 2);
    }
    public perimeter(): number {
        return 12 * this.side;
    }
}
let rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

let circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
console.log(circle.perimeter()); // Output: 31.41592653589793

let square = new Square(5);
console.log(square.area()); // Output: 25
console.log(square.perimeter()); // Output: 20

let cube = new Cube(5);
console.log(cube.volume()); // Output: 125
console.log(cube.area()); // Output: 60
console.log(cube.perimeter()); // Output: 30