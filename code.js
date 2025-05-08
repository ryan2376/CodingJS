// let message = {
//     name: 'Ryan',
//     country: 'Kenya',
//     ID: 39302928
// }

// console.log(message.ID);

// let myArray = ['ryan','peshie']

// console.log(myArray.length);
// console.log(myArray[0]);

// function test(name){
//     console.log('Hello ' + name);
// }

// test('Ryan')

// function divide(num1, num2){
//     let product = num1 / num2
//     return product
// }

// console.log(divide(5, 4));

// let num = 2;
// let marks = 56;

// const grade = marks > 80 ? 'A' : 'pass'

// console.log(grade);

// let moneyInWallet = 1;

// let priceOfCandy = 2;

// canBuyCandy = moneyInWallet >= priceOfCandy;

// console.log(canBuyCandy);

// if (canBuyCandy) 
//     console.log('Enjoy your sweets');
// else 
//     console.log('come back next time');


// const numbers = [1,2,3,4,5,6,7];


// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// const citizen = {
//     name: 'Munene',
//     age: 45,
//     nationality: 'kenyan'
// }

// for (let key in citizen){
//     console.log(citizen[key]);
// }

// const numbers = [1,2,3,4,5,6,7];

// for (let element of numbers){
//     console.log(element);
// }

// let i = 0;

// do{
//     if(i === 5){
//         break;
//     }
//     console.log(i);
//     i++
// }while (i < 10)

// while (i < 10){
//     i++;
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }

// do {
//     i++;
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }while(i < 20);

// function maxNum (a, b){
//     if( a < b){
//         console.log(b);
//     }else if(b < a){
//         console.log(a);
//     }else{
//         console.log('numbers are equal');
//     }
// }

// maxNum(5, 27)

// function fizzBuzz(num) {
//         if(num % 3 === 0 && num % 5 === 0)
//             return 'FizzBuzz';
//         else if(num % 3 === 0)
//             return 'Fizz';
//         else if(num % 5 === 0)
//             return 'Buzz';
//         else
//             return num;
            
// }

// console.log(fizzBuzz(20));


// function evenNums(arr) {
//     for (const element of arr) {
//         if (element % 2 === 0) {
//             console.log(element);        
//         }
//     }
// }

// evenNums([1,2,3,4,5,6])
// function oddNums(arr) {
//     for (const element of arr) {
//         if (element % 2 === 0) {
//             continue
//         }
//         console.log(element);        

//     }
// }

// oddNums([1,2,3,4,5,6])

// const car = {
//     name: 'mercedes',
//     engine: '6 ltr V8',
//     transmission: '8-speed automatic',
//     sound: function() {
//         console.log('vrooom vroom');
//     }
// }

// function getCar(name, engine, transmission) {
//     return {
//         name,
//         engine,
//         transmission
//     }
// }

// const anotherCar = getCar('ferrari', '4ltr V12', 'dual-clutch')

// console.log(anotherCar);


// function Car(name, engine, transmission) {
//     // this = {};

//     this.name = name;
//     this.engine = engine;
//     this.transmission = transmission;
// }

// // return this;(implicitly)

// const anotherCar = new Car("toyota",'3 ltr V6',"6-speed auto")


// console.log(anotherCar);

// anotherCar.drivetrain = 'AWD';

// console.log(anotherCar)


// let a = { value: 20}

// let b = a

// a.value = 100

// console.log(a)
// console.log(b)

const cat = {
    name: 'softie',
    age: 5,
    furColor: 'white-brown'
}

// for (const key in cat){
//     console.log(cat[key])
// }

// const keys = Object.keys(cat)

// console.log(keys[0])

// const values = Object.values(cat)

// console.log(values)

// const entries = Object.entries(cat)

// console.log(entries)

// for(const value of Object.keys(cat)){
//     console.log(value)
// }

// let a = { value: 5};

// let b = {...a};

// Object.assign (b, a)

// console.log(b)

// b.value = 20;

// console.log(a)
// console.log(b)



// const randomNum = Math.round(Math.random() * (100 - 1) + 1)

// console.log(randomNum)

// let sentence = 'The making of a Software Engineer.'

// let trimmedSentence = sentence.trimEnd();

// console.log(sentence)
// console.log(trimmedSentence)

// let splitWord = sentence.split(' ');

// console.log(splitWord)

// let joinedWord = splitWord.join(' ');

// console.log(joinedWord)

// let firstname = 'Ryan';

// let secondName = 'Munene';

// console.log(`${firstname} ${secondName}`)

// const numbers = [20, 50, 70, 100]

// const indexOfThree = numbers.lastIndexOf(30)

// if(indexOfThree === -1){
//     console.log('cannot find user')
// }

// console.log(indexOfThree)

// const employees = [
//     {
//         id: 1,
//         name: 'nesh'
//     },
//     {
//         id: 2,
//         name: 'pesh'
//     },
//     {
//         id: 3,
//         name: 'nkirote'
//     }
// ]

// const employee = employees.find((n) => n.name === 'pesh');

// console.log(employee)

// function addition(num1, num2) {
//     return num1 + num2
// }

// console.log(addition(2, 4)) 

// const multiply = (num3, num4) => num3 * num4


// console.log(multiply(2,4))

// const numbers = [1,2,3,4,5]

// const popedElement = numbers.pop();

// console.log(popedElement)

// const shiftedElem = numbers.shift()

// console.log(shiftedElem)

// const splicedElem = numbers.splice(1, 2)

// console.log(splicedElem)

// const example1 = [1,2,3]
// const example2 = [4,5,6]

// // const combinedArr = example1.concat(example2)

// // console.log(combinedArr)

// // const slicedArr = combinedArr.slice(4, 5)

// // console.log(slicedArr)


// const spreadedArr = [...example1,...example2]

// console.log(spreadedArr)

// const numbers = [1,2,3,4,5]

// numbers.forEach((numbers, index) => {
//     console.log(`At index: ${index} ${numbers}`)
// });

// for(let elements of numbers){
//     console.log(elements)
// }

// const numbers = [1,2,3,4,5]

// const joined = numbers.join(' ')

// console.log(joined)


// const fullName = 'Patience Kawira'

// const loweredParts = fullName
//         .split(' ')
//         .reverse()
//         .join('-')
//         .toLowerCase()

// console.log(loweredParts)

// const employees = [
//     {
//         id: 1,
//         name: 'nesh'
//     },
//     {
//         id: 2,
//         name: 'pesh'
//     },
//     {
//         id: 3,
//         name: 'nkirote'
//     }
// ];

// employees.sort((a, b) => {
//     const lowerCaseA = a.name.toLowerCase()
//     const lowerCaseB = b.name.toLowerCase()

//     if(lowerCaseA < lowerCaseB) return -1;
//     if(lowerCaseA > lowerCaseB) return 1;
//     return 0
// });
// console.log(employees)

// const numbers = [2,4,6,8,10]

// const areAllEven = numbers.every(number => {
//     return number % 2 === 0
// })

// console.log(areAllEven)

// const numbers = [1,2,4,6,7,8,10]

// const filteredNums = numbers.filter(number => number % 2 === 0)

// console.log(filteredNums)

// const employees = [
//     {
//         id: 1,
//         name: 'nesh',
//         role: 'Dev'
//     },
//     {
//         id: 2,
//         name: 'pesh',
//         role: 'nurse'
//     },
//     {
//         id: 3,
//         name: 'nkirote',
//         role: 'Dev'
//     }
// ];

// const Devs = employees.filter(dev => dev.role === 'Dev')

// console.log(Devs)

const numbers = [2,4,6,8,10]

const squaredNums = numbers.map(num => num * num);

console.log(squaredNums)

const chars = ['a', 'b', 'c', 'd']

const capitalisedChars = chars.map(char => char.toUpperCase());

console.log(capitalisedChars)


const employees = [
    {
        id: 1,
        name: 'nesh',
        role: 'Dev',
        email: 'RyanMund@gmail.com'
    },
    {
        id: 2,
        name: 'pesh',
        role: 'nurse',
        email: 'PeshidTund@gmail.com'

    },
    {
        id: 3,
        name: 'nkirote',
        role: 'Dev',
        email: 'Nikidend@gmail.com'

    }
];

const updatedEmployees = employees.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase()
}
));

console.log(updatedEmployees)