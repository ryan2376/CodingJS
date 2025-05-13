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

    push(item){
        this.data[this.length] = item;

        this.length++

        return this.length
    }

    get(index){
        // this.length = index;

        return this.data[index]
    }

    pop(){
        const lastItem = this.data[this.length -1] 

        delete (this.data[this.length -1] )

        this.length--
        return lastItem
    }

    shift(){
        const firstItem = this.data[0]


// re-indexing
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete (this.data[this.length -1])


        this.length--


        return firstItem
    }
    
    deleteByIndex(i){
        
    }
}

const myNewArray = new MyArray();

myNewArray.push('mango')
myNewArray.push('orange')
myNewArray.push('kiwi')
console.log(myNewArray);
// console.log(myNewArray.pop())
console.log(myNewArray.shift())
// console.log(myNewArray.get(2))

console.log(myNewArray);