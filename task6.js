"use strict";
let contact = ["aysel@example.com", 501234567];
let studentss = [
    {
        id: 1,
        name: "Aysel",
        age: 20,
        isActive: true
    },
    {
        id: 2,
        name: "Murad",
        age: 22,
        isActive: false
    },
    {
        id: 3,
        name: "Nigar",
        age: 19,
        isActive: true
    }
];
let activeStudents = studentss.filter(student => student.isActive);
let studentNames = studentss.map(student => student.name);
let course = {
    title: "TypeScript",
    duration: 3,
    price: 200
};
console.log("Bütün tələbələr:", studentss);
console.log("Aktiv tələbələr:", activeStudents);
console.log("Tələbələrin adları:", studentNames);
console.log("Əlaqə məlumatı:", contact);
console.log("Kurs məlumatları:", course);
