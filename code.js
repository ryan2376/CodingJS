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

for(const key of Object.keys(cat)){
    console.log(key)
}