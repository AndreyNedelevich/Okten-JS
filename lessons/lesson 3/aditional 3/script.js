'use strict';
//                                          additional3.txt

//********************************************************************************************************************
const array = [6, 7, 11,false, true, false, 36, 101,'age', 'lastName', true, false, "friend", "e", 'name',];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (const arrayElement of array) {
    if(typeof arrayElement ==="boolean"){
        console.log(arrayElement);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const arrayElement of array) {
    if(typeof arrayElement ==="number"){
        console.log(arrayElement);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const arrayElement of array) {
    if(typeof arrayElement ==="string"){
        console.log(arrayElement);
    }
}

//****************************************************************************************************************

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 2 ===0 ) {
         // console.log(k);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 2 ===1 ) {
         // console.log(k);
    }
}
//**************************************************************************************************************************

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
const arrayRes=[];
let rep=0;
while (arrayRes.length<=50) {
    let diciNumber = Math.floor(Math.random() * 1000) + 1;
  if(diciNumber%2===0){
      arrayRes.push(diciNumber)
  }
    rep++;
}
console.log(arrayRes);


//     b. заповнити його 50 непарними числами за допомоги циклу.
const arrayRes2=[];
let rep2=0;
while (arrayRes2.length<=50) {
    let diciNumber = Math.floor(Math.random() * 1000) + 1;
    if(diciNumber%2!==0){
        arrayRes2.push(diciNumber)
    }
    rep2++;
}
console.log(arrayRes2);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
const arrayRes5=[];
for (let k = 0; k < 20; k++) {
arrayRes5[k]=Math.random();
}
console.log(arrayRes5);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const arrayRes6=[];
for (let k = 0; k < 20; k++) {
    arrayRes6[k]=Math.floor(Math.random() * (732 - 8 + 1) + 8);
}
console.log(arrayRes6);

// 2. Вивести за допомогою console.log кожен третій елемен

const arrRes7=[6, 7, 11,false, true, false, 36, 101,'age', 'lastName', true, false, "friend", "e", 'name',];
for (let k = 2; k < arrRes7.length; k+=3) {
    console.log(k,arrRes7[k]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
const array2 = [2, 17, 13, 6, 22, 31, 45, 66,36,9,25,15,89,124,15,13, 100, -18];

for (let k = 2; k < array2.length; k+=3) {
  if(array2[k]%2===0){
      console.log(array2[k]);
  }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const resulting=[];
for (let k = 2; k < array2.length; k+=3) {
    if(array2[k]%2===0){
        resulting[k]=array2[k]
        // resulting.push(array2[k])
    }
}
console.log(resulting);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
const example =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let k = 0; k < example.length; k++) {
 if(example[k+1]%2===0){
     console.log(example[k]);
 }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const shopping=[100,250,50,168,120,345,188];
let sum=0
for (let k = 0; k < shopping.length; k++) {
   sum+=shopping[k]
}
const average=sum/shopping.length
console.log(average);

//*****************************************************************************************************************

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
let usersWithCitie=[...usersWithId]


for (const obj of usersWithCitie)
for (const adress of citiesWithId) {
    if(obj.id===adress.user_id)
        obj.adress = adress;
    }


console.log(usersWithCitie);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//*********************************************************************************************************

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const ar=[ 'a', 'b', 'c'];
let res=''
for (let k = 0; k < ar.length; k++) {
res+=ar[k]
}
console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let res3=''
let counter=0
while (counter<ar.length){
    res3+=ar[counter]
    counter++
}
console.log(res3);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let result=''
for (const element of res3) {
    result+=element
}
console.log(result);

//****************************************************************************************************************


