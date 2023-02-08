// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div style='margin-top: 10px;font-size: 25px'>Довільний текст всередині</div>`)
}

//***************************************************************************************************************
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div style='color: green;margin-top: 10px;font-size: 25px'>${i + 1} - Довільний текст всередині</div>`)
}

//***/************************************************************************************************************
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i < 20) {
    document.write(`<div  style='color:red;margin-top: 10px;font-size: 25px'>Довільний текст всередині</div>`)
    i++
}
//********************************************************************************************************************
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;

while (j < 20) {
    document.write(`<div  style='color:blue; margin-top: 10px;font-size: 25px'>${j + 1} - Довільний текст всередині</div>`)
    j++
}
//********************************************************************************************************************

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html','css','javascript','mysql','mongodb','react','angular','node.js'];

console.log(listOfItems);

document.write('<div>')
    document.write('<ul>')
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li style='margin-top: 5px;font-size: 25px'> ${listOfItems[i]} </li>`)
}
    document.write('</ul>')
    document.write('</div>')

//**************************************************************************************************************

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write('<div class="wrapper">')
for (const item of products ){

            document.write(`<div class='wrapper_item'>`)
              document.write(`<div class='wrapper_title'>${item.title}</div>`)
               document.write("<div class='wrapper_container'>")
                        document.write(`<div class='wrapper_container_price'>${item.price} </div>`)
                        document.write("<div class='wrapper_container_img'>")
                           document.write(`<img src="${item.image}" alt="photo">`)
                        document.write('</div>')
               document.write('</div>')
            document.write('</div>')
}
document.write('</div>')
//********************************************************************************************************************
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


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



for(const element of users ){
    if(element.status){
        document.write(`<ul>`)
        document.write(`<li style='margin-top: 5px;font-size: 25px'>користувачів зі статусом true   -    ${  element.name} age ${element.age}; </li>`)
        document.write('</ul>')
    }
}

document.write(`<div  style='color:red;margin-top: 10px;font-size: 35px'>**************************************************</div>`)

for(const element of users ){
    if(element.status===false){
        document.write(`<ul>`)
        document.write(`<li style='margin-top: 5px;font-size: 25px'>користувачів зі статусом false   -    ${  element.name} age ${element.age};</li>`)
        document.write('</ul>')
    }
}
document.write(`<div  style='color:red;margin-top: 10px;font-size: 35px'>**************************************************</div>`)


for(const element of users ){
    if(element.age>30){
        document.write(`<ul>`)
        document.write(`<li style='margin-top: 5px;font-size: 25px'>користувач  старший за 30 років   -    ${  element.name} age ${element.age};</li>`)
        document.write('</ul>')
    }
}













