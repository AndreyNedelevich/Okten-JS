// - створити блок,

const blockDiv = document.createElement("div")
console.log(blockDiv);
blockDiv.innerHTML = "Это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков."

//  - додати йому класи wrap, collapse, alpha, beta
blockDiv.classList.add('wrap', 'collapse', 'alpha', 'beta')
console.log(blockDiv.classList);
console.log(blockDiv.className);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
blockDiv.style.backgroundColor = '#72d6e4';
blockDiv.style.fontSize = '60px';
blockDiv.style.fontWeight = '700';
blockDiv.style.textDecoration = 'underline';
blockDiv.style.border = '6px solid red';
blockDiv.style.margin = '30px 20px';
blockDiv.style.padding = '30px 20px';


// - додати цей блок в body.
document.body.appendChild(blockDiv);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(blockDiv.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arr = ['Main', 'Products', 'About us', 'Contacts']

const ulElement = document.createElement("ul")
for (const item of arr) {
    let liElement = document.createElement('li');
    liElement.innerText = item;
    ulElement.append(liElement)
    document.body.appendChild(ulElement);
}

//*******************************************
//Для себя практиковал.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const container = document.querySelector(".container")
console.log(container);
users.forEach((item, index) => {
    const htmlKod = `<div> <p>  ${index + 1} =>name ${item.name} - age ${item.age} status ${item.status} </p> </div>`
    // container.insertAdjacentHTML('afterbegin', htmlKod)
    container.insertAdjacentHTML('beforeend', htmlKod)
})
//*********************************************************

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


for (const item of coursesAndDurationArray) {
    const div = document.createElement("div")
    div.textContent = `${item.title}  -monthDuration ${item.monthDuration}   `;
    document.body.append(div);
}

// =========================

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

coursesAndDurationArray2.forEach((item, index) => {
    let block = document.createElement('div');
    block.classList.add('item')
    let title = document.createElement('h2');
    title.classList.add('heading')
    title.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText =`monthDuration  ${item.monthDuration}`;
    block.append(title, p);
    document.body.appendChild(block);
})

// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

const wrapper = document.createElement("div")
document.body.append(wrapper);
simpsons.forEach((item, index) => {
        const htmlKod = `     
          <div class='member'>
        <h1 style="text-align: center">${index + 1}.  ${item.name} ${item.surname}  </h1>
        <h2 style="text-align: center"> AGE -   ${item.age}  </h2>
        <div >
            <img src="${item.photo}" alt="${item.name}">
            <p> ${item.info}</p>
        </div>
    </div>`
        wrapper.insertAdjacentHTML('beforeend', htmlKod);

    }
)

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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

for (const itemObj of coursesArray) {
    const block = document.createElement('div')
    const title = document.createElement("h1")
    title.innerText = itemObj.title;

    const wrapper = document.createElement('div')
    const subTitle = document.createElement("div")
    subTitle.innerText = `monthDuration = ${itemObj.monthDuration} `;
    const subTitle2 = document.createElement("div")
    subTitle2.innerText = `hourDuration = ${itemObj.hourDuration}`;

    wrapper.append(subTitle, subTitle2);

    block.style.backgroundColor = '#72d6e4';
    block.style.fontSize = "30px"
    block.style.color = 'black';
    block.style.textAlign = 'center';
    block.style.fontWeight = '700';
    block.style.border = '6px solid red';
    block.style.margin = '30px 20px';
    block.style.padding = '30px 20px';

    wrapper.style.display = 'flex'
    wrapper.style.justifyContent = "space-around"
    wrapper.style.gap = "20px"
    wrapper.style.fontSize = "20px"
    wrapper.style.fontWeight = '400';


    subTitle.style.width = "40%"
    subTitle.style.height = '35px';
    subTitle.style.backgroundColor = 'white';
    subTitle2.style.width = "40%"
    subTitle.style.height = '35px'
    subTitle2.style.backgroundColor = 'white';
    subTitle2.style.border = '6px solid red';
    subTitle.style.border = '6px solid red';
    subTitle2.style.color = 'black';
    subTitle.style.color = 'black';


    const blockModules = document.createElement('div')
    blockModules.style.display = "flex";
    blockModules.style.justifyContent = "space-evenly";
    blockModules.style.flexWrap = "wrap";



    for (const item of itemObj.modules) {
        const blockModule = document.createElement('div')
        blockModule.textContent = item;


        blockModule.style.textAlign = "center"
        blockModule.style.width = "130px"
        blockModule.style.height = "80px"
        blockModule.style.backgroundColor = 'white';
        blockModule.style.border = '6px solid red';
        blockModule.style.color = 'black';
        blockModule.style.margin = ' 6px';
        blockModule.style.marginTop = ' 15px';
        blockModule.style.fontWeight = '400';
        // blockModule.padding = '10px 10px';

        blockModules.append(blockModule)
    }


    block.append(title, wrapper, blockModules);
    document.body.appendChild(block)


}


// ------------------

//   - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const message = document.createElement('div');
message.innerHTML =
    'Мы используем на этом сайте cookie для улучшение функциональности.<button id="text" >Ok!</button>';

container.append(message);
message.classList.add('cookie');

document
    .querySelector('#text')
    .addEventListener('click', function () {
        message.remove();
    });

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
//     зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const question = document.createElement('div');
question.classList.add("question")
question.innerHTML = 'Укажите ваш возраст  <input class="input" />   <button class="btn" >Ok!</button>';
container.appendChild(question);

const input = document.querySelector('.input')
const btn = document.querySelector(".btn")

document.body.classList.add("blur")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const age = +input.value
    console.log(age);
    if (age >= 18) {
        question.classList.add("overlay")
        document.body.classList.remove("blur")
    } else {
        alert("Ваш возраст меньше 18 лет!!!")
    }
    input.textContent = "";
})


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість колонок, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додаткова частина для завдання)

const task = document.createElement('div');
const blockBig = document.createElement('div');


task.classList.add("question")
blockBig.classList.add("block")

document.body.appendChild(task)
document.body.appendChild(blockBig)

task.innerHTML = 'Введите данные  <input placeholder="кількість рядків" type="number" class="input" id="lines" /> ' +
    '<input placeholder="кількість колонок" type="number" class="input" id="cells"  /> <input placeholder="вміст ячеєк" class="input"  id="descriptions" />   <button id="btn" class="btn" >Ok!</button>  <button id="btn-resset" class="btn" >Скинути</button>';


let line = document.getElementById("lines");
let cell = document.getElementById("cells");
let descrip = document.getElementById("descriptions");


document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    if (line.value && cell.value && descrip.value) {

        blockBig.style.gridTemplateColumns = `repeat( ${Math.round(cell.value)}, minmax(10px, auto))`;
        blockBig.style.gridTemplateRows = `repeat( ${Math.round(line.value)}, minmax(50px, auto))`;
        blockBig.style.gridAutoRows = `minmax(50px, auto)`;

  const amountBlock =Number(line.value)*Number(cell.value)

        for (let i = 0; i < amountBlock; i++) {
            const blocks = document.createElement('div');
            blocks.classList.add("blocks")
            blockBig.append(blocks)
            blocks.textContent=`${i+1}  ${descrip.value}`
        }
    } else {
        alert('Заполните все поля')
    }
    line.value = '';
    cell.value = '';
    descrip.value = '';
})


document.getElementById("btn-resset").addEventListener("click", (e) => {
    document.querySelectorAll(".blocks").forEach(item=>item.remove())
    blockBig.style.gridTemplateColumns = '';
    blockBig.style.gridTemplateRows = '';
    blockBig.style.gridAutoRows = '';
})


