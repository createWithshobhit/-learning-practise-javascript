
// const Num = ['1', '2.6', '3.2', '4', '14.9', '5', '6.7', '7'];
// const NewNum = Num.map(num => Math.floor(num));
// console.log(NewNum);
// return NewNum;
const employees = [
    {
        id: 1,
        name: 'John Doe',
        age: 28,
        department: 'Sales',
        salary: 50000,
        yearsOfExperience: 3
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 34,
        department: 'Marketing',
        salary: 65000,
        yearsOfExperience: 7
    },
    {
        id: 3,
        name: 'Emily Johnson',
        age: 45,
        department: 'Human Resources',
        salary: 75000,
        yearsOfExperience: 15
    },
    {
        id: 4,
        name: 'Michael Brown',
        age: 30,
        department: 'IT',
        salary: 80000,
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'Sarah Davis',
        age: 25,
        department: 'Sales',
        salary: 45000,
        yearsOfExperience: 2
    },
    {
        id: 6,
        name: 'David Wilson',
        age: 40,
        department: 'Finance',
        salary: 90000,
        yearsOfExperience: 12
    },
    {
        id: 7,
        name: 'Laura Martinez',
        age: 38,
        department: 'Marketing',
        salary: 72000,
        yearsOfExperience: 10
    },
    {
        id: 8,
        name: 'James Taylor',
        age: 32,
        department: 'IT',
        salary: 82000,
        yearsOfExperience: 9
    },
    {
        id: 9,
        name: 'Linda Moore',
        age: 29,
        department: 'Human Resources',
        salary: 68000,
        yearsOfExperience: 4
    },
    {
        id: 10,
        name: 'Robert Anderson',
        age: 50,
        department: 'Finance',
        salary: 95000,
        yearsOfExperience: 20
    }
];

const Experience = employees.filter(emp =>emp.yearsOfExperience > 5 && emp.salary>10000 )
.map(emp=>emp.name)
.sort()
console.log(Experience);
