
//                                                 additional1.txt  (выборочно)

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

const arr1 = [6, 7, 11, 36, 101];
const arr2 = ['age', 'lastName', "friend", "e", 'name'];
const arr3 = ['age', 'lastName', "friend", "e", 'name', true, false, "firstName", 5, 10257];

for (let i = 0; i < arr1.length; i++) console.log(arr1[i])
for (let i = 0; i < arr2.length; i++) console.log(arr2[i]);
for (let i = 0; i < arr3.length; i++) console.log(arr3[i]);
//*********************************************************************************************************
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const res1 = [];
const res2 = []
for (let i = 0; i < 15; i++) {
    res1[i] = `arraay res ${i + 7 / 5}`
    // console.log(res1[i]);
}
console.log(res1);

for (let i = 0; i < arr1.length; i++) {
    res2[i] = arr1[i] * 5
    // console.log(res2[i]);
}
console.log(res2);

//***************************************************************************************************************

const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++
}
//     2. перебрати його циклом for
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0
while (j < arr.length) {
    if (j % 2 === 1) {
        console.log(arr[j]);
    }
    j++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arr.length; k++) {
    if (k % 2 === 1) {
        console.log(arr[k]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let a = 0
while (a < arr.length) {
    if (arr[a] % 2 === 0) {
        console.log(arr[a]);
    }
    a++
}



// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < arr.length; k++) {
    if (arr[k] % 2 === 0) {
        console.log(arr[k]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < arr.length; k++) {
  if(arr[k]%3===0){
      arr[k]="okten"
  }
}
console.log(arr);

// 8. вивести масив в зворотньому порядку.

for (let k = arr.length-1; k >=0; k--) {
    console.log(arr[k]);
}
//*******************************************************************************************************************
