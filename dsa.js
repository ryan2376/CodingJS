// O(n)
// const students = ['Pesh', 'Allan', 'Nkiro', 'Ryan', 'Max']

// const findStudent = (students, studentName) => {

//     for(let studentList of students)

//         if(studentName === studentList){
//         console.log(`User ${studentName} found`)
//         }
        

// }

// findStudent(students,'Ryan')

// O(1)

// const numbers = [1, 2, 3, 4, 5]

// const getNum = (arr, index) => {
//     console.log(arr[index])
// }

// getNum(numbers, 2)

// O(n^2)

// const findPairs = (arr) => {
//     for (i of arr){
//         for (j = i + 1; j < arr.length; j++ ){
//             console.log(`Pair: ${arr[i]}, ${arr[j]}`)
//         }
//     }
// }

// const numbers = [1, 2, 3, 4, 5]

// findPairs(numbers)


class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
}

const myNewArray = new MyArray();

console.log(myNewArray.push());