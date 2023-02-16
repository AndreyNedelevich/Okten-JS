// - Знайти та вивести довижину настипних стрінгових значень
const arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (const string of arrStr) {
    console.log(string.length)
}

// - Перевести до великого регістру наступні стрінгові значення
const arrStrUpper = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (let i = 0; i < arrStrUpper.length; i++) {
    arrStrUpper[i] = arrStrUpper[i].toUpperCase()
}
console.log(arrStrUpper);


// - Перевести до нижнього регістру настипні стрінгові значення
const arrStrLower = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
const arrStrLower2 = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';


for (let i = 0; i < arrStrLower.length; i++) {
    arrStrLower[i] = arrStrLower[i].toLowerCase()
}
console.log(arrStrLower);
// Вариант 2********************************************************************************
const res = arrStrLower2.split('').map(item => item.toLowerCase()).join('')
console.log(res);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);

const arrays = ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToarray = (str) => str.join(' ')

let arr = stringToarray(arrays)
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arrNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const changeOnString = arrNumber.map(item => item + "") // или String(item)
console.log(changeOnString);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3, 4, 85, 78, 96, 1025, -5, -14, -0.25];
let nums2 = [11, 21, 3, 4, 85, 78, 96, 1025, -5, -14, -0.25];

const sortNums = function (nums, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a)
    }
}

sortNums(nums, 'ascending') // [3,11,21]
console.log(nums);
sortNums(nums, 'descending') // [21,11,3]
console.log(nums);

// Вaриант 2*************************************************************************************
const sortNums2 = (nums, callBack) => nums.sort(callBack)

sortNums2(nums2, (a, b) => a - b)
console.log(nums2);
sortNums2(nums2, (a, b) => b - a)
console.log(nums2);
// *******************************************************************************************
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const newcoursesAndDurationArray = coursesAndDurationArray.filter(item => item.monthDuration > 5)
console.log(newcoursesAndDurationArray);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const idCoursesAndDurationArray = coursesAndDurationArray.map((item, index) => {
    return {...item, id: index + 1}
})
console.log(idCoursesAndDurationArray);


// *******************************************************************************************************************


//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cards = [{
    cardSuit:'spades',
    value: ['6','7','8','9','10','ace','jack','queen','king'],
    color: 'black'
    },
    {
        cardSuit:'diamonds',
        value: ['6','7','8','9','10','ace','jack','queen','king'],
        color: 'red'
    },
    {
        cardSuit:'hearts',
        value: ['6','7','8','9','10','ace','jack','queen','king'],
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: ['6','7','8','9','10','ace','jack','queen','king'],
        color: 'black'
    },
]


// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

const CurdsSort=cards.reduce((acc,currentItem)=>{

    switch (currentItem.cardSuit) {
        case "spades":
            acc.spades.push(currentItem);
            break;
        case 'diamonds':
            acc.diamonds.push(currentItem);
            break;
        case 'hearts':
            acc.hearts.push(currentItem);
            break;
        case 'clubs':
            acc.clubs.push(currentItem);
            break;
    }
    return acc;

},{
    spades:[],
  diamonds:[],
   hearts:[],
   clubs:[]
})

console.log(CurdsSort);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass
const find=(arr,find)=>{
    for (const item of arr) {
        if(item===find) return true;
    }
}

const findSass=coursesArray.filter(item=>find(item.modules,"sass"))
console.log(findSass);


// --написати пошук всіх об'єктів, в який в modules є docker

const findDocker=coursesArray.filter(item=>find(item.modules,"docker"));
console.log(findDocker);