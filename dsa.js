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


// class MyArray {
//     constructor() {
//         this.length = 0;

//         this.data = {};
//     }

//     push(item) {
//         this.data[this.length] = item;

//         this.length++

//         return this.length
//     }

//     get(index) {
//         // this.length = index;

//         return this.data[index]
//     }

//     pop() {
//         const lastItem = this.data[this.length - 1]

//         delete (this.data[this.length - 1])

//         this.length--
//         return lastItem
//     }

//     shift() {
//         const firstItem = this.data[0]


//         // re-indexing
//         for (let i = 0; i < this.length; i++) {
//             this.data[i] = this.data[i + 1]
//         }

//         delete (this.data[this.length - 1])


//         this.length--


//         return firstItem
//     }

//     deleteByIndex(index) {
//         let deletedItem = this.data[index]

//         for (let i = index; i < this.length-1; i++) {
//                 this.data[i] = this.data[i + 1]
//         }

//         delete (this.data[this.length -1])

        
//         this.length--



//         return deletedItem
//     }
// }

// const myNewArray = new MyArray();

// myNewArray.push('mango')
// myNewArray.push('orange')
// myNewArray.push('kiwi')
// console.log(myNewArray);
// // console.log(myNewArray.pop())
// // console.log(myNewArray.shift())
// console.log(myNewArray.deleteByIndex(1))
// // console.log(myNewArray.get(2))

// console.log(myNewArray);


// let fullName = 'ryan Munene'

// let reversedString = fullName.split('').reverse().join('')


// const reversedString = (str) => {
//     let reversedStr = str.split('').reverse().join('')
//     return reversedStr
// }

// console.log(reversedString('Hello'))


// const isPalindrome = (str) => {
//     let reversedStr = str.split('').reverse().join('')
//     if(str === reversedStr){
//         console.log('Yes thats a Palindrome!!')
//     }else{
//         console.log('try another word...')
//     }
// }

// isPalindrome('aba')

// let nums = 1234

// let stringified = nums.toString().split('').reverse().join('')
// let reversed = Number(stringified)
// console.log(reversed)

const reversedints = (ints) => {
    let reversed = ints.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(ints)
}

console.log(reversedints(345))
