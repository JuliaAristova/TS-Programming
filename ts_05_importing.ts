import { Employee } from './ts_04_class_object';

let employee1 = new Employee("John Doe", 30, 100_000);
console.log(employee1);
employee1.work();
console.log(Employee.isEmployed);

Employee.payTax();