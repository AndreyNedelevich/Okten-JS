// Можно обработать данное от API при помощи await с одним then

const listCuntries = await fetch('https://api.sampleapis.com/countries/countries')

const listCuntriesRes = listCuntries.json()
// УКазываем тип данных

listCuntriesRes.then(data => console.log(data));
//
//******************************************************************************************************

// При помощи асинхронной функции с async / await

const getAll = async function (url) {
    const response = await fetch(url)
    return response.json();
}

const date = await getAll("https://jsonplaceholder.typicode.com/posts")
// Благодаря тому что мы работаем в type 'Module'!!!
// console.log(date);


//***********************************************************************************************


const listCuntriesPromice = fetch('https://api.sampleapis.com/countries/countries')
console.log(listCuntriesPromice);
//Мы не сразу получем страны изначально мы получаем специальный  объект Promise.
// Далее при помощи then() переводим его в JSON формат
// И через второй then() получаем уже объект данных.


// Далее мы получаем данные при помощи специального метода then(). Как результат получаем объект Responce
listCuntriesPromice
    .then(data => data.json())
    .then(contries => {
        console.log(contries);
    }).catch(error => console.log("Ошибка", error))
//Первый then переводит данные в JSON формат при помощи второго then мы непосредственно получаем данный в виде объекта.

//************************************************************************************************************

//Создаем наш собственный Promice при помощи функции конструтора new Promice
// Внутрь промиса передаем Кол бек в нем два аргумента resolve,reject)
// resolve срабатывает если успешно получаем данные
// reject срабатывает если происходит ошибка
const coffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(Error("Ваш кофе готов!"))
        resolve("Ваш кофе готов!!!")
    }, 1500)
})
coffee.then(data => {
    // console.log(data);
}).catch(err => console.log(err))

//**************************************************************************************

const family = [
    {member: "mother", id: 111, coffee: "Latte"},
    {member: "father", id: 222, coffee: "Espresso"},
    {member: 'son', id: 333, coffee: "Cappuchino"}
]

const getCoffee = (member) => {
    // console.log(member);
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot')
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            const coffee = list.find(res => res.title === member.coffee)
            // console.log(coffee);
            return {
                ...member, coffee
                //    Если левая сторона назваеться как и правая можно записать вместо такой
                //    записи coffee: coffee вот так coffee
            }
        })

}


const getFamilyMember = (id) => {
// Мы обращаемся к базе данннх соответственно мы не сможем получить ответ в виде объекта поэтому  у нам промис
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(item => item.id === id)
            if (member) {
                resolve(member)
                console.log(member);
            } else {
                reject(Error("Член семьи не найден"))
            }
        }, 1500)
    })
}

getFamilyMember(111).then(data => {
    return getCoffee(data)
}).then(newMember => {
    console.log(newMember);
}).catch(err => console.log(err))

console.log(family);

//*******************************************************************************************
// Если мы ожидаем данные  от двух или более Promise

const beerPromise = fetch('https://api.sampleapis.com/beers/ale')
const moviesPromise = fetch('https://api.sampleapis.com/jokes/goodJokes')

Promise.all([beerPromise, moviesPromise])
    .then(data => Promise.all(data.map(res => res.json())))
    .then(finaldate => {
        console.log(finaldate);
    })


