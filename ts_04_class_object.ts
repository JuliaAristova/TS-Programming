export class Employee {

    //instance variables - required to be initialized when declared

    public employeeName !: string;   // ! to bypass initialization error
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