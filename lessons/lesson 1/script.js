// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

const a = 'hello';
const b = 'owu';
const c = 'com';
const d = 'ua';
const e = 1;
const f = 10;
const g = -999;
const i = 3.14;
const j = 2.7;
const k = 16;
const l = 24;
const m = true;
const n = false;

const arr = [a, b, c, d, e, f, g, j, i, k, l, m, n]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

const firstName = 'Andrey';
const middleName = "Valentinovich";
const lastName = "Nedelevich"
const person = `${firstName} ${middleName} ${lastName}`;
console.log(person)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let num = 100;
let str = '100';
let bool = true;

console.log(
    typeof num,
    typeof str,
    typeof bool,
)


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const firstname = prompt("Enter your name");
const lastname2 = prompt("Enter your last name");
const age = Number(prompt("enter your age")) ;
console.log(typeof age)
console.log("Your name is a" + firstname + ". your last name  " + lastname2 + ". your age " + age);