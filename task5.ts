interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    salary: number;
    department: string;
}

let employees: Employee[] = [
    {
        name: "Aysel",
        age: 25,
        salary: 1200,
        department: "IT"
    },
    {
        name: "Murad",
        age: 30,
        salary: 1500,
        department: "Marketing"
    }
];

let employeeNames = employees.map(employee => employee.name);

console.log(employeeNames);