//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// let driverInfo ={name:'vasya',age:23, nickname:'vodila'};
// function Car(model,madeis, age,maxSpeed, capacityOfengine,) {
//     this.model = model;
//     this.madeis = madeis;
//     this.age= age;
//     this.maxSpeed = maxSpeed;
//     this.capacityOfengine =capacityOfengine;
//     this.drive = function(maxSpeed){
//         console.log(`їдемо з швидкістю ${maxSpeed} на годину`)
//     };
//     this.info= function () {
//         for ( let obj in this) {
//             if (typeof this[obj] !== 'function') console.log(`${obj} - ${this[obj]}`)
//         }
//         ;
//     };
//     this.NewSpeed = function(NewSpeed){
//             this.NewSpeed = this.maxSpeed+ NewSpeed
//     };
//     this.changeage = function (newAge) {
//             this.age = newAge;
//         console.log(this.age+'-років машині')
//
//     };
//         this.infodriver= function () {
//             for( obj in driverInfo){
//                 console.log(obj,driverInfo[obj])
//             };
//
//     }
// };
//  let car1 = new Car('tesla','USA',2,300,'electrical',20 );
//  car1.info();
//  car1.drive(400);
//  car1.NewSpeed(250);
//  car1.changeage(20);
//  car1.infodriver(driverInfo);

// ---------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// let driverInfo ={name:'vasya',age:23, nickname:'vodila'};
// class Car {
//     constructor(model, madeis, age, maxSpeed, capacityOfengine) {
//         this.model = model;
//         this.madeis = madeis;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.capacityOfengine = capacityOfengine;
//     }
//     drive () {
//         console.log(`їдемо з швидкістю ${this.maxSpeed} на годину`)
//     };
//     infoAboutCar () {
//         for (let item in this) {
//             console.log(`${item} -${this[item]}`)
//         }
//     }
//     increseMaxSpeed(inValue){
//         console.log(this.maxSpeed+inValue+'км/год-нова збільшена швидкість')
//     }
//     changeAge (newValue){
//         console.log( this.age+newValue+'-років машині')
//     }
//     addDriver (driver){
//         console.log('Vash vodiy:')
//         for (let obj in driverInfo){
//             console.log(`${obj}-${driverInfo[obj]}`)
//         }
//     }
// }
// car2=new Car('opel','Germany',20,300, 1.8);
// car2.drive();
// car2.infoAboutCar();
// car2.increseMaxSpeed(20);
// car2.changeAge(30);
// car2.addDriver(driverInfo);
//-------------------------------------------------------------------------------------------------
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// let arrPopeluska =[
//     {PersonName:'vika',age:'18',size:28},
//     {PersonName:'nadya',age:'19',size:26},
//     {PersonName:'ira',age:'20',size:25},
//     {PersonName:'cris',age:'21',size:24},
//     {PersonName:'hrystia',age:'22',size:23},
//     {PersonName:'mashka',age:'23',size:22},
//     {PersonName:'vita',age:'24',size:21},
//     {PersonName:'olya',age:'25',size:20},
//     {PersonName:'valya',age:'26',size:19},
//     {PersonName:'solya',age:'27',size:18}
// ];
// function Popeluska(PersonName,age,sizeOfleg){
//     this.PersonName =PersonName;
//     this.age = age;
//     this.sizeOfleg =sizeOflege;
// }
//---------------------------------------------------------------------------------------------------------------
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// class King {
//     constructor(namePerson,age,numberOfshoes){
//         this.namePerson=namePerson;
//         this.age =age;
//         this.numberOfshoes =numberOfshoes
//     }
// }
// King1 = new King('Igor',22,24);
// console.log(King1);
//
//     for (let item of arrPopeluska) {
//         if (item.size === King1.numberOfshoes) {
//             console.log('Твоя попелюшка:',item);
//
//
//         }
//     }
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let Popeluska_main = arrPopeluska.find((item) => item.size === King1.numberOfshoes);
// console.log(Popeluska_main);

