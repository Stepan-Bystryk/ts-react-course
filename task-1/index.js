// Array.prototype.customForEach ...
const arr1 = [1, 2, 3, 4, 5]

arr1.forEach(function(el, index, array) {
    console.log(el);
})

// Array.prototype.customMap ...
const arr2 = [1, 2, 3, 4, 5]
const newArr2 = arr2.map(el => {
    return el
})
console.log(newArr2);

// Array.prototype.customReduce ...
const arr3 = [1, 2, 3, 4, 5]
const amount = arr3.reduce((total, el) => {
    return total + el
}, 0)
console.log(amount);

// Array.prototype.customFind ...
const arr4 = [
    { name: 'Nicole' },
    { name: 'Foster' },
    { name: 'Stewie' }
]
const stewie = arr4.find(person => person.name === 'Stewie')
console.log(stewie);

// main task ...
const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

let arrSubjects = Object.entries(subjects)

// task 1
let lessons = '';

arrSubjects.forEach(([key, value]) => {
    lessons += key.toString()+', ';
})
console.log(lessons);

// task 2
let amountStudents = 0;

arrSubjects.forEach(([key, value]) => {
    amountStudents += value.students;
})
console.log(amountStudents);

// task 3
let amountTeachers = 0;

arrSubjects.forEach(([key, value]) => {
    amountTeachers += value.teachers;
})
console.log(amountTeachers);

// task 4
let totalStuff = 0;

arrSubjects.forEach(([key, value]) => {
    totalStuff = amountStudents / Object.keys(arrSubjects).length; // не особо понял задание
})
console.log(totalStuff);

// task 5
let arrSorting = [];

arrSubjects.forEach(([key, value]) => {
    arrSorting.push(value);
    arrSorting.sort((end, begin) => begin.teachers - end.teachers); // верна ли запись ?
})
console.log(arrSorting);