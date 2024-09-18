//TODO - Create Employee Module here and export to use in index.js

class Employee {
    constructor(id, firstName, lastName, email, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
    }
}
let employees = [
    new Employee(1, "Pritesh", "Patel", "pritesh@gmail.com", 5000),
    new Employee(2, "Krish", "Lee", "krish@gmail.com", 4000),
    new Employee(3, "Racks", "Jacson", "racks@gmail.com", 5500),
    new Employee(4, "Denial", "Roast", "denial@gmail.com", 9000)
]

module.exports = employees;

