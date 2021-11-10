// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let numberOne = 1;
// let numberTen = 10;
// let numberOneTh = -999;
// let number123 = 123;
// const pi = 3.14;
// let nimberFloat = 2.7;
// let number16 = 16;
// let trueee = true;
// let falseee = false;
//
// // 1
// console.log(a);
// alert(a);
// document.write(a);
// // 2
// console.log(b);
// alert(b);
// document.write(b);
// // 3
// console.log(c);
// alert(c);
// document.write(c);
// // 4
// console.log(d);
// alert(d);
// document.write(d);
// // 5
// console.log(numberOne);
// alert(numberOne);
// document.write(numberOne);
// // 6
// console.log(numberTen);
// alert(numberTen);
// document.write(numberTen);
// // 7
// console.log(numberOneTh);
// alert(numberOneTh);
// document.write(numberOneTh);
// // 8
// console.log(number123);
// alert(number123);
// document.write(number123);
// // 9
// console.log(pi);
// alert(pi);
// document.write(pi);
// // 10
// console.log(nimberFloat);
// alert(nimberFloat);
// document.write(nimberFloat);
// // 11
// console.log(number16);
// alert(number16);
// document.write(number16);
// // 12
// console.log(falseee);
// alert(falseee);
// document.write(falseee);
// // 13
// console.log(trueee);
// alert(trueee);
// document.write(trueee);
// //---------------------------------------------------------------------------------------------------------------------
//
//
// //----------------------------------------------------------------------------------------------------------------------
// // - Переприсвоїти кожній змінній з завдання значення на довільне.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
//  a = 'bye';
//  b = 'uow';
//  c = 'moc';
//  d = 'au';
//  numberOne = -1;
//  numberTen = -10;
//  numberOneTh = 999;
//  number123 = 321;
//  nimberFloat = 7.2;
//  number16 = 61;
//  trueee = false;
//  falseee = true;
// // 1
// console.log(a);
// alert(a);
// document.write(a);
// // 2
// console.log(b);
// alert(b);
// document.write(b);
// // 3
// console.log(c);
// alert(c);
// document.write(c);
// // 4
// console.log(d);
// alert(d);
// document.write(d);
// // 5
// console.log(numberOne);
// alert(numberOne);
// document.write(numberOne);
// // 6
// console.log(numberTen);
// alert(numberTen);
// document.write(numberTen);
// // 7
// console.log(numberOneTh);
// alert(numberOneTh);
// document.write(numberOneTh);
// // 8
// console.log(number123);
// alert(number123);
// document.write(number123);
// // 9
// console.log(pi);
// alert(pi);
// document.write(pi);
// // 10
// console.log(nimberFloat);
// alert(nimberFloat);
// document.write(nimberFloat);
// // 11
// console.log(number16);
// alert(number16);
// document.write(number16);
// // 12
// console.log(falseee);
// alert(falseee);
// document.write(falseee);
// // 13
// console.log(trueee);
// alert(trueee);
// document.write(trueee);

//---------------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'sten';
// let middleName = 'nazar';
// let lastNAme = 'ihorovych';
// let person = firstName +' ' +middleName +' ' +lastNAme;
// console.log(person);
//---------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('Як тебе звати?');
// let fatherName = prompt('По-батькові?');
// let age = prompt('Скільки років тобі?');
// alert(` Вітаю ${name} ${fatherName}. Тобі ${age} rokiv` );

//----------------------------------------------------------------------------------------------------------------------

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
//---------------------------------------------------------------------------------------------------------------------
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// console.log(5 < 6); // true
// console.log(5 > 6); //-> false
// console.log(5 == 6); //-> false
// console.log(5 === 6); //-> false
// console.log(10 == 10);// -> true
// console.log(10 === 10);//-> true
// console.log(10 !== 10); //-> false
// console.log(10 < 10); //-> false
// console.log(10 > 10);// -> false
// console.log(123 === '123'); //-> false
// console.log(123 == '123'); //-> true
//---------------------------------------------------------------------------------------------------------------------
//
// //- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//  let str = "20";
// let a = 5;
// // document.write(str + a + "<br/>"); //-тут просто склеює строки(конкатенація), буде "205"

// document.write(str - a + "<br/>"); //-тут вже виконує математичну операцію (напевно знак '-' говорить робити з ними операцію
// // віднімання хоч один із типів даних string ) i в результаті буде 15

// document.write(str * "2" + "<br/>");- //-тут аналогічна ситуація знак множення виконує з строками дії ніби б це були
// числа і буде 40

// document.write(str / 2 + "<br/>");//- аналогічна ситуація як в вище двох в результаті буде 10
//----------------------------------------------------------------------------------------------------------------------