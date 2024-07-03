"use strict"

// const objectA = {
//     a: 10,
//     b: true
// }

// const copyOfA = objectA

// copyOfA.a = 20

// copyOfA.d = false

// objectA.e = 1

// copyOfA.r = 'Ivan'

// console.log(objectA.b)

// copyOfA.c = 'abc'
// console.log(objectA.e,objectA.d)
// console.log(copyOfA.r)



// let a = 10
// a = true
// a = 'bo'
// a = undefined

// function a() {
//     console.log('hey')
// }

// a()

// a = 10 

// a()

// const a = () => {
//     console.log('hey')
// }

// a()

// a = 10

// a()


let numberOfFilms ;

function start() {
 numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastOfFilm = prompt("Один з останіх переглянутих Фільмів?", "").trim(),
    yourRating = prompt("Твоя оцінка Фільма", "");
  
    if(lastOfFilm != null && yourRating != null && lastOfFilm != '' && yourRating != '' && lastOfFilm.length < 50) {
      personalMovieDB.movies[lastOfFilm] = yourRating;
      console.log('OK');
    } else {
      console.log('NO');
        i--;
    }
  }
}

// rememberMyFilms();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
 personalMovieDB.genres[i - 1] = prompt(`введіть ваш улюблений жанр ${i}` , '');
  };
};
// writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Переглянуто за мало Фільмів');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('ти класичний переглядач фільмів');
  } else if (personalMovieDB.count >= 30) {
    console.log('ти експерт по фільмах');
  } else {
    console.log('error')
  }
}

// detectPersonalLevel();


function showMyDB() {
  while (personalMovieDB.private == false) {
     return console.log(personalMovieDB)
  }
}
// showMyDB();


function calculateVolumeAndArea() {
 const cubeVolume = +prompt('введіть довжину ребра куба')
if (cubeVolume == '' ||cubeVolume <= 0 ||cubeVolume == null || cubeVolume == isNaN(cubeVolume)|| !cubeVolume == Number.isInteger(cubeVolume)){
  console.log('ошибка')
}else {

const cubeVolume2 =  cubeVolume * cubeVolume * cubeVolume,
surfaceArea = 6,
surfaceArea2 = cubeVolume * cubeVolume * surfaceArea;
console.log(`Объем куба:${cubeVolume2} площадь всей поверхности:${surfaceArea2}`);
}
};
calculateVolumeAndArea();


function getCoupeNumber(seatNumber) {
  if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return console.log("Ошибка. Проверьте правильность введенного номера места");
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  return console.log(Math.ceil(seatNumber / 4),seatNumber);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);



// let num = 25

// switch (num){
// case 23: 
//     console.log('no ok');
//     break;
// case 25:
//     console.log('ok');
//     break;
// default:
//     console.log('default');
//     break;
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//  console.log('всі задоволенні') 
// } else {
//     console.log("не цікаво")
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// // while (num <= 55) {
// //   console.log(num);
// //   num++;
// // }

// do {
//   console.log(num);
//   num++;
// } 
// while (num <= 55);

// for (let i = 1;i < 8;i++) {
//   if (i == 6) {
//     // break;
//     continue;
//   }
//     console.log(i);
// }

// let result = '';
// const length = 10;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//   result += "\n"; //перенос строки /n .і плюс строка += 
// }

// console.log(result);


// first:  for (let i = 0;i < 3; i++) {
//   console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//          if (k === 2)  break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// if (i == 6) {
//   console.log(`First level: ${i}`);
// }

// function fourthTask() {
//   // Пишем решение вот тут
//   let i = 2;
//   while (i <= 16) {
//       if (i % 2 === 0) {
//         i++;
//         continue;
//       } else{
//       console.log(i);
//       i++;
//   }
// }
// }
// fourthTask()

// do {
//   if (i % 2 === 0){
//     i++
//     continue;
//   } else {
//     console.log(i)
//   }
// } while (i <= 16)


//   function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//           arrayOfNumbers[i - 5] = i;
//           console.log(arrayOfNumbers)
// }
//     // Не трогаем
//     return arrayOfNumbers;

// }
// fifthTask()

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i = 0; i <= 6; i++) {
//     result[i] = arr[i];
//     console.log(result)
// }
  
//   // Не трогаем
//   return result;
// }

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);
//     // Не трогаем
//   return data;
// }
// secondTask()

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);
//   // Не трогаем
//   return result;
// }
// thirdTask()

// let num = 20;

// function showFirstMessage(text){
//   console.log(text);
//   num = 10;
// }

// showFirstMessage('hej');
// console.log(num);

// function calc(a, b) {
//   return(a+b)
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum)

// const logger =  function() {
// console.log('hej')
// };

// logger()

// const calc = (a, b) =>  a + b; 

// function sayHello(name) {
  
//   console.log(`Привет, ${name}`);
//   return name;
// }
// sayHello('Антон');


// function returnNeighboringNumbers(5) {
//   let arr = []
//   arr = returnNeighboringNumbers
  
  
// }

// console.log(returnNeighboringNumbers())

// function isEven(number) {
//   const duo = number % 2

//   if (duo === 2 || duo === 0) {
//    console.log('Число парне');
//   } else  {
//     console.log('Число не парне');
//   }
//   console.log(duo)
// }
// isEven(4)


// const userName = prompt('Введіть своє ім\'я');
// const userAge = prompt('Скільки тобі років?');
// const userAddress = prompt('твоє місце проживання');
// const person = {
//   name: userName,
//   age: userAge,
//   city: userAddress
// };

// console.log(Object.values(person))

// function Person(userName, userAge, userAddress) {
//   this.userName = userName;
//   this.userAge = userAge;
//   this.userAddress = userAddress;
// }

// const userName = prompt('Введіть своє ім\'я');
// const userAge = prompt('Скільки тобі років?');
// const userAddress = prompt('твоє місце проживання');
// const person1 = new Person(userName);

// console.log(Object.values(person));

// const numArray = [1, 2, 3, 4, 5, 6];
// const newArray = numArray.filter(number => number % 2 ===0);

  
//     console.log(newArray);



// const userContact = {
//   userName: John,
//   userNumber: 0987326728,
//   userMail: iavn@gmail.com
// }
// const searchName = prompt('Введіть імя для пошуку')
// const {userName} = userContact;
// // const userContact = {userName: searchName};
// if (userName === true) {
//   alert(userContact)
// } else {
//   alert('нічого не знайдено')
// }

// const person = { firstName: 'John', lastName: 'Doe' };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const contactList = {
//   contacts: [
//     {
//       name: "John",
//       phone: "0987326728",
//       email: "ivan@gmail.com",
//     },
//     {
//       name: "John2",
//       phone: "0987326728",
//       email: "ivan@gmail.com",
//     },
//     {
//       name: "John3",
//       phone: "0987326728",
//       email: "ivan@gmail.com",
//     },
//   ],



// searchName: function(name) {
//     return this.contacts.find(contact => contact.name === name)
// },
// addContact: function(name, phone, email) {
//     this.contacts.push({ name, phone, email });
// },
// };
// console.log(contactList.searchName("John2"));
// contactList.addContact("Олена5", "0987326728", "ivan@gmail.com")
// console.log(contactList.contacts);

// let company = {
//   sales: [
//       { name: "Іван", salary: 1000 },
//       { name: "Марія", salary: 1200 },
//   ],
//   development: {
//       web: [{ name: "Петро", salary: 1500 },
//             { name: "Олена", salary: 1300 }]
//   }
// };

// let company = {
//   sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//   development: {
//       web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 100 }],
//       internals: [{ name: 'Jack', salary: 1300 }]
//   }
// }
// function calculateTotalSalary(department) {
//   let totalSalary = 0;

//   if (Array.isArray(department)) {
//       department.forEach(employee => {
//           totalSalary += employee.salary;
//       });
//   } else if (typeof department === 'object' && department !== null) {
//       for (let subDepartment in department) {
//           totalSalary += calculateTotalSalary(department[subDepartment]);
//       }
//   }

//   return totalSalary;
// }

// let totalSalary = calculateTotalSalary(company);
// console.log("Total salary:", totalSalary);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for(let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('done')
// }

// test()

// function doNothing () {};
// console.log(doNothing())

// const str = "test";
// const arr = [1, 2, 3, 4]

// console.log(arr.length)

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(0,11))


// // console.log(logg.substring(6,11))

// console.log(logg.substr(6,11));

// const num = 12.2;
// console.log(Math.round(num))

// const test = "12.2px"

// console.log(parseInt(test))
// console.log(parseFloat(test))

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };
// options.makeTest();



// console.log(Object.keys(options).length);

// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for(let i in options[key]) {
//     console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//     counter++;
//     }
//   } else {  console.log(`свойство ${key} имеет значение ${options[key]}`);
//   counter++;
//   }
// }
// console.log(counter)


// const arr = [1, 26, 13, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(i, item, arr){
// console.log(i, item, arr);
// });
// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value)
// }

// const str =  prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainObj) {
  let objCopy = {};

  let key;

  for ( key in mainObj) {
      objCopy[key] = mainObj[key];
  }

  return objCopy;
};

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'adadadad';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video,...blogs, 'vk', 'facebook'];

      console.log(internet)

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 8];

log(...num);

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

let {
  name,
  age,
  skills: {
    languages,
    programmingLangs: {
      js,
      php
    },
    exp
  },
} = personalPlanPeter;

function showExperience(plan) {
        return console.log(exp)
}
showExperience(personalPlanPeter)

const soldier = {
  health: 400,
  armorr: 100
};

const john = {
  health: 100
};

Object.setPrototypeOf(john, soldier);

console.log(john);

 