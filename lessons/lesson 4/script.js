// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (a, b) => a * b

console.log(square(20, 50));
console.log(square(10, 5.5));
console.log(square(551, 7.95));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle = function (r) {
    return 1 / 4 * 3.14 * Math.pow(r, 2);
}
console.log(areaCircle(30));
console.log(areaCircle(40));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCilindre(r, h) {
    // V = π × r2 × h, де π=3,14; r – радіус основи; h – висота циліндра
    return (Math.PI * Math.pow(r, 2)) * h;
}

console.log(squareCilindre(25, 5));
console.log(squareCilindre(11.3, 2.75));
// - створити функцію яка приймає масив та виводить кожен його елемент

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
const funShowArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
funShowArr(listOfItems)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const writeParagraf = function (text) {
    document.write(
        `<p>${text}text</p>
       `
    )
}
writeParagraf("створити функцію яка створює параграф з текстом. Текст задати через аргумент")
writeParagraf("створити функцію яка створює параграф з текстом. Текст задати через аргумент")
writeParagraf("створити функцію яка створює параграф з текстом. Текст задати через аргумент")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUl = function (arg) {
    document.write(`
        <ul>
        <li>${arg}</li>
        <li>${arg}</li>
        <li>${arg}</li>   
        </ul>
`)
}
createUl("Ukraine")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createHtml = function (text, quantity) {
    document.write("<ul>")
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write("</ul>")
}

createHtml("Ukraine", 20)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr = [6, 7, 11, false, true, false, 36, 101, 'age', 'lastName', true, false, "friend", "e", 'name',];

const funCreateList = function (arr) {
    document.write("<ul>")
    for (let i = 0; i < arr.length; i++) {
        document.write
        (`
        <li>${arr[i]}</li>
        `)
    }
    document.write("</ul>")
}
funCreateList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrObj = [
    {id: 1, name: "Andrey", age: 33},
    {id: 2, name: "Sergey", age: 37},
    {id: 3, name: "Aleksandr", age: 29},
    {id: 4, name: "Aleksandr", age: 29},
    {id: 5, name: "Aleksandr", age: 29}
]

const showObj = function (obj) {
    for (const elementObj of obj) {
        document.write("<div style='border-bottom: 3px solid black'>")
        for (const key in elementObj) {
            document.write(`<p>${key} - ${elementObj[key]}</p>`);
        }
        document.write("</div>")
    }
}
showObj(arrObj)

// - створити функцію яка повертає найменьше число з масиву
const arrNumber = [22, 44, 0.25, 0.1, 6, 9, 12, 85, 98, 78, 41, 52, 36]

const minNumber = (arr) => {
    let min = arr[0]
    for (const num of arr) {
        min = num < min ? num : min
    }
    return min
}

console.log(minNumber(arrNumber));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const arrNumber2 = [100, 22, 44, 0.25, 0.1, 6, 9, 12, 85, 98, 78, 41, 52, 36]

const sumNumber = (arr) => {
    let sum = 0
    for (const num of arr) {
        sum += num
    }
    return sum
}
console.log(sumNumber(arrNumber2));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const arrays = [11, 22, 33, 44]
const swapChange = (arr, index1, index2) => {
    if (index1 > arr.length - 1 || index2 > arr.length - 1) {
        confirm("Заданные параметры превышают размер масива")
        return
    }
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (index1 === i) {
            temp = arr[i];
            arr[i] = arr[index2]
        }
    }
    arr[index2] = temp;
}
swapChange(arrays, 3, 0)
console.log(arrays);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


const exchange = function (sumUAN, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === "USD") {
        return sumUAN / currencyValues[0].value
    } else if (exchangeCurrency === 'EUR') {
        return sumUAN / currencyValues[1].value
    } else {
        console.log("Нк корректно выбрана валюта");
        return sumUAN
    }

}
const changeMoney = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR')
console.log(changeMoney);






