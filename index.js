// VARIABLES

// const name = `George`;
// const age = 65;
// const children = [`Sammy`, `Sally`, `Jennifer`, `Reed`];



// OBJECTS

// const george = {
//   name: `George`,
//   age: 65,
//   children: [`Sammy`, `Sally`, `Bradley`, `Jennifer`, `Reed`, `Benji`] // length = 6
//   //            0        1         2         3          4        5
// }

// const frida = {
//   name: `Frida`,
//   age: 59,
//   children: [`Billy`] // length = 1
//   //            0
// }



// FOR LOOPS

//                                                  6
// for(let indexCounter = 0; indexCounter < george.children.length; indexCounter++) {
//   const childName = george.children[indexCounter];

//   if(childName[0] === `B`) {
//     console.log(`${childName} is the best!`);
//   } else if (childName[0] === 'R') {
//     console.log(`${childName} is grrrrrreat!`);
//   } else {
//     console.log(`${childName} is awesome!`);
//   }
// }

// console.log(`DONE`);



// FUNCTIONS

// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// }

// const total = addTwoNumbers(5, 4);
// console.log(total);

// const otherTotal = addTwoNumbers(67, 2);
// console.log(otherTotal);


// const getFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// }



// const getFullName = (firstName, lastName) => {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName;
// }

// TESTING
// console.log(getFullName(`Patty`, `Oh`));




// HIGHER ORDER FUNCTIONS

// const addTwo = (num) => {
//   return num + 2;
// }

// //                    78
// const subtractTen = (num) => {
//   //      78 - 10 = 68
//   return num - 10; // 68
// }

// //            subtractTen, 78
// const doMath = (mathFunc, num) => {
// //              subtractTen(78)     
//   const total = mathFunc(num); // 68
//   return total;
// }

// TESTING
// console.log(doMath(subtractTen, 78)); // 68



// RETURNING IN A FOR LOOP

// const findNum = (numbers, targetNumber) => {
//   for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

//     if(numbers[i] === targetNumber) {
//       return `FOUND THE TARGET OF ${targetNumber}`;
//     }
//   }
// }

// // TESTING
// console.log(findNum([1, 2, 3, 4], 2))
//                   0  1  2  3


// ARRAY METHODS

// FOREACH
// const names = [`Percy`, `Ginger`, `Logan`];

// const addIsAwesome = (name) => {
//   console.log(`${name} is awesome!`);
// }

// names.forEach((name) => {
//   console.log(`${name} is awesome!`);
// });



// ANONYMOUS FUNCTIONS - functions without a name (used one time)

// const addIsAwesome = (name) => {
//   console.log(`${name} is awesome!`);
// }

// (name) => {
//   console.log(`${name} is awesome!`);
// }




// FIND

// const names = [`Harry`, `Johanna`, 'Halbert', `Jill`, `Carol`];

// const foundName = names.find((name) => {
//   return name[0] === 'J';
// })

// console.log(foundName);



// FILTER

// const names = [`Yuri`, `Olaf`, `Ben`, `Yoslin`];

// const foundNames = names.filter((individualName) => {
//   return individualName[0] === 'Y';
// });

// console.log(foundNames);




// MAP

// const names = [`Larry`, `Curly`, `Moe`, `Lucy`];

// const newArray = names.map((singleName) => {
//   return `${singleName} is awesome!`;
// });

// console.log(names);
// console.log(newArray);


// const numbers = [4, 54, 23, 46, 12];

// const newNumbers = numbers.map((num) => {
//   return num + 5;
// });

// console.log(newNumbers);

