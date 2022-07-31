// Array.prototype.customMap ...
const callback = (el, index, arr) => {}

Array.prototype.customMap = (callbackFunk) => {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        const newElement = callbackFunk(this[i], i, this)
        newArr.push(newElement)
    }
    return newArr
}

const arr = [1, 2, 3]
arr.customMap()

// Array.prototype.customForEach ...
Array.prototype.customForEach = (callback) => {
    for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(this[i], i, this);
    }
}

// Array.prototype.customReduce ...
const callbackR = (acc, el, index, arr) => {}
Array.prototype.customReduce = (callback, initialValue) => {
    let acc, startIndex
    if (initialValue === undefined) {
        acc = this[0]
        startIndex = 1
    } else {
        acc = initialValue
        startIndex = 0
    }
    for (let index = startIndex; index < this.length; index++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

// Array.prototype.customFilter ...
Array.prototype.customReduce = (callback) => {
    const newArr = []

    for (let i = 0; i < this.length; i ++) {
        if(callback(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

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
const sortedTeachers = Object.entries(subjects).sort((a, b) => {
    const numberTeachersA = a[i].teachers
    const numberTeachersB = b[i].teachers

    return numberTeachersB - numberTeachersA
}).map((subjectData) => subjectData[0])
