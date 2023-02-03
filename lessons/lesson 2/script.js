// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [1, 3, 5, 7, "Andriy", true, 258, "number", false, 500]
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const HarryPotter1 = {
    title: "Harry Potter and the philosopher's stone",
    pageCount: 697,
    genre: 'fantastic'
}
const HarryPotter2 = {
    title: "Chamber of Secrets",
    pageCount: 497,
    genre: 'fantastic'
}

const HarryPotter3 = {
    title: "Prisoner of Azkaban",
    pageCount: 357,
    genre: 'fantastic'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const Hobbit = {
    title: "The Hobbit ",
    pageCount: 697,
    genre: 'fantastic',
    authors: [
        {
            name: "J. R. R. Tolkien",
            age: 57
        },
    ]
}

const HarryPotter5 = {
    title: "Order of the Phoenix",
    pageCount: 497,
    genre: 'fantastic',
    authors: [
        {
            name: "J. K. Rowling",
            age: 57
        },
    ]
}

const TheLordОfТheRings = {
    title: "The Lord of the Rings",
    pageCount: 857,
    genre: 'fantastic',
    authors: [
        {
            name: "J. R. R. Tolkien",
            age: 57
        },
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    {
        name: "Oleksandr Stetsiuk",
        userName: "Oleksandr",
        passford: "OS1111",

    }, {
        name: "Sviatoslaw Papysh",
        userName: "Sviatoslaw",
        passford: "SP2222",

    }, {
        name: "Maksym Melnick",
        userName: "Maksym",
        passford: "MM3333",

    }, {
        name: "Aleksandr Vitvitskiy ",
        userName: "Aleksandr",
        passford: "AV4444",

    }, {
        name: "Ihor Zhuk",
        userName: "Ihor",
        passford: "IZ5555",

    }, {
        name: "Tania Reftso",
        userName: "Tania",
        passford: "TR6666",

    }, {
        name: "Martina Skrypnyk",
        userName: "Martina",
        passford: "MS7777",

    }, {
        name: "Volodymyr Yunyk",
        userName: "Volodymyr",
        passford: "VA8888",

    }, {
        name: "Marko Andrusyak",
        userName: "Marko",
        passford: "MA9999",

    }, {
        name: "Anastasiia Kulynych",
        userName: "Anastasiia",
        passford: "AK0000",

    },
]

console.log(users[0].passford, users[1].passford, users[2].passford, users[3].passford, users[4].passford, users[5].passford, users[6].passford, users[7].passford, users[8].passford, users[9].passford,)


// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const a = 0;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 59;

if (time <= 30) {
    time <= 15 ? console.log("Перша четверть") : console.log("Друга четверть")
} else if (time > 30 && time <= 59) {
    time <= 45 ? console.log("Третя четверть") : console.log('Четверта четверть')
} else {
    confirm("Введите число от 0 до 59")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 16;

if (day <= 10 && day > 0) console.log("Первая декада")
else if (day > 10 && day <= 20) console.log("Вторая декада")
else if (day >= 20 && day <= 31) console.log("Третья  декада")
else confirm("Введите дату от 1 до 31")

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const weekDay = 9;

switch (weekDay) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursaday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("This is not day of the week");
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
const num1 = 0.003;
const num2 = -0.01;

if (typeof num1 !== 'number' || typeof num2 !== "number") {
    console.log("Введіть числовий тип данних")
} else if (typeof num1 === 'number' && typeof num2 === "number") {
    num1 > num2 ? console.log(num1) : num2 > num1 ? console.log(num2) : console.log("Числа рівні")
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

const x = undefined || "default"
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super")
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super")
}





























