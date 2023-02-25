// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

const User = function (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const users = [
    new User(1, "Ihor", "Zhuk", "IhorZhuk@gamil.com", "0503758596"),
    new User(2, "Andriy", "Stetsiuk", "AndriyStetsiuk@gamil.com", "0504558786"),
    new User(3, "Maksym", " lopukh", "Maksymlopukh@gamil.com", "050751469"),
    new User(4, "Vladimir", "Grin", "VladimirGrin@gamil.com", "0678595241"),
    new User(5, "Aleksandr", "Zakatsiura", "AleksandrZakatsiura@gamil.com", "0672579864"),
    new User(6, "Maria", "Andrusyak", "MariaAndrusyak@gamil.com", "0501198576"),
    new User(7, "Anastasiya", "Nedelevich", "AnastasiyaNedelevich@gamil.com", "0501425966"),
    new User(8, "Valentina", "Sachaev", "ValentinaSachaev@gamil.com", "0501698541"),
    new User(9, "Vlada", "Povorosnuk", "VladaPovorosnuk@gamil.com", "0501302596"),
    new User(10, "Elena", "Ostapenko", "ElenaOstapenko@gamil.com", "0501225841"),
]
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(arr => arr.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort2 = users.sort((a, b) => a.id - b.id);
console.log(sort2);

// const sortWord = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortWord);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом
// зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const client = [
    new Client(1, "Ihor", "Zhuk", "IhorZhuk@gamil.com", "0503758596", ["Boots", "Coat", "Jacket", "Shoes", "Suit"]),
    new Client(2, "Andriy", "Stetsiuk", "AndriyStetsiuk@gamil.com", "0504558786", ["Waistcoat", "Jacket"]),
    new Client(3, "Maksym", " lopukh", "Maksymlopukh@gamil.com", "050751469", ["Boots", "Coat", "Jacket"]),
    new Client(4, "Vladimir", "Grin", "VladimirGrin@gamil.com", "0678595241", ["Boot cu", "Ripped", "Blouse", "Uniform", "Dress"]),
    new Client(5, "Aleksandr", "Zakatsiura", "AleksandrZakatsiura@gamil.com", "0672579864", ["Boot cu", "Ripped", "Blouse", "Uniform"]),
    new Client(6, "Maria", "Andrusyak", "MariaAndrusyak@gamil.com", "0501198576", ["Costume", "Coat", " Frock coat"]),
    new Client(7, "Anastasiya", "Nedelevich", "AnastasiyaNedelevich@gamil.com", "0501425966", ["Boots", "Coat", "Jacket", "Shoes", "Suit", "Uniform"]),
    new Client(8, "Valentina", "Sachaev", "ValentinaSachaev@gamil.com", "0501698541", ["Blouse", "Uniform", "Dress", "Boots"]),
    new Client(9, "Vlada", "Povorosnuk", "VladaPovorosnuk@gamil.com", "0501302596", ["Boots", "Coat"]),
    new Client(10, "Elena", "Ostapenko", "ElenaOstapenko@gamil.com", "0501225841", ["Boots", "Uniform", "Dress"]),
]
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

const Car = function (modal, manufacturer, productionYear, maxSpead, EnginePower) {
    this.modal = modal;
    this.manufacturer = manufacturer;
    this.productionYear = productionYear;
    this.maxSpead = maxSpead;
    this.EnginePower = EnginePower;
};

const honda = new Car('Honda', "Honda Motor", 2021, 185, 2.5);
const BMW = new Car('BMW', "BMW AG", 2015, 190, 2);
console.log(honda, BMW);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`${this.modal} їде зі швидкістю ${this.maxSpead} на годину`);
};

honda.drive()
BMW.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    for (const item in this) {
        console.log(item, "-", this[item])
    }
};
honda.info();
BMW.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpead += newSpeed;
    console.log(`${this.modal} їде зі швидкістю ${this.maxSpead} на годину`);
    return this;
}

honda.increaseMaxSpeed(5).increaseMaxSpeed(5).increaseMaxSpeed(5)
BMW.increaseMaxSpeed(5).increaseMaxSpeed(5)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.productionYear = newValue;
}

honda.changeYear(2022);
BMW.changeYear(2023)
console.log(honda);
console.log(BMW);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
    console.log(this);

}
BMW.addDriver("Andrey")

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
    constructor(modal, manufacturer, productionYear, maxSpead, EnginePower) {
        this.modal = modal;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.maxSpead = maxSpead;
        this.EnginePower = EnginePower;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`${this.modal} їде зі швидкістю ${this.maxSpead} на годину`);
    };


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (const item in this) {
            console.log(item, "-", this[item])
        }
    };


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpead += newSpeed;
        console.log(`${this.modal} їде зі швидкістю ${this.maxSpead} на годину`);
        return this;
    }


// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.productionYear = newValue;
    }


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
        console.log(this);
    }
}

const volkswagen = new CarClass('Volkswagen', "Volkswagen", 2021, 200, 3);
console.log(volkswagen);

volkswagen.drive();
volkswagen.info();
volkswagen.increaseMaxSpeed(5).increaseMaxSpeed(5);
volkswagen.changeYear(2023);
volkswagen.addDriver("Andrey")
//*****************************************************************************************************

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const arrPopelushka = [
    new Popelushka("Vika", 35, 42),
    new Popelushka("Elena", 25, 40),
    new Popelushka("Ekaterina", 26, 35),
    new Popelushka("Vlada", 19, 36),
    new Popelushka("Anastasia", 21, 42),
    new Popelushka("Maria", 23, 41),
    new Popelushka("Olga", 24, 35),
    new Popelushka("Tatyana", 26, 37),
    new Popelushka("Anna", 19, 39),
    new Popelushka("Masha", 18, 37),
]
console.log(arrPopelushka);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}

const princ = new Princ("Vladimir", 26, 40);
console.log(princ);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const item of arrPopelushka) {
    if (princ.shoesSize === item.footSize) {
        console.log(item);
    }
}
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(arrPopelushka.find(item => princ.shoesSize === item.footSize));