export class Employee {

    //instance variables - required to be initialized when declared
    //TS has very strict propeerty initialization checks
    public employeeName !: string;   // ! to bypass initialization check
    public employeeAge !: number;
    public employeeSalary !: number;

    //constructor - initializes variables
    constructor(name: string, age: number, salary: number) {
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
    }

    // statice variable - shared among all instances
    public static isEmployed: boolean;   //can be initialised here or in static block   
    
    static {
        Employee.isEmployed = true;
    }
    public work(): void {
        console.log(`${this.employeeName} is working.`);
    }
    public static payTax(): void {
        console.log("Paying taxes.");
    }
}
export function greeting(): void {
    console.log("greeting from greeting function.");
}

let emp1 = new Employee("Alice", 30, 50000);
console.log(emp1.employeeName);
console.log(emp1.employeeAge);
console.log(emp1.employeeSalary);
emp1.work();

//accessing static method and variable - only through class name
Employee.payTax();
console.log(Employee.isEmployed);