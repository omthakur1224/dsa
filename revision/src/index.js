// let arr = [1, 3, 2];
// let str = "1,3,2";

// console.log(arr == str)//true
// console.log(str===arr)//false

// const numbers = new Set([1, 1, 2, 3, 4]);
// console.log(numbers);
// { 1, 2, 3, 4 }

// const browser = new Set("Firefox");
// console.log(browser);
//{ 'F', 'i', 'r', 'e', 'f', 'o', 'x' }

// const [x, ...y, z] = [1, 2, 3, 4];
// console.log(x, y, z);
// SyntaxError: Rest element must be last element

// function Car() {
//     this.make = 'Lamborghini';
//     return { make: 'Maserati' };
//   }
  
//   const myCar = new Car();
//   console.log(myCar.make);//Maserati


// function Car() {
//     this.make = 'Lamborghini';
  
//   }
  
//   const myCar = new Car();
//   console.log(myCar.make);//Lamborghini

// function addToList(item, list) {
//     // console.log(list.push(item),"inside")
//     return list.push(item);
//   }
  
//   const result = addToList('apple', ['banana']);
//   console.log(result);//2 index of pushing position

// class Person {
//     constructor() {
//       this.name = 'Lydia';
//     }
//   }
//   Person = class AnotherPerson {
//     constructor() {
//       this.name = 'Sarah';
//     }
//   };
  
//   const member = new Person();
//   console.log(member.name);


// let newList = [1, 2, 3].push(4);

// console.log(newList);//4
// console.log(newList.push(5));//error newList.push is not a function

// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   };
  
//   const colors = ['pink', 'red', 'blue'];
  
//   console.log(colorConfig.colors[1]);//TypeError: Cannot read properties of undefined (reading '1')