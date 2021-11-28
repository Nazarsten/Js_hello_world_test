//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let area =(a,b)=>console.log(a*b);
// area(10,20);
//------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола
// let roundAred = (p,r)=>p*(r**2);
// console.log(roundAred(3.14,5));
//--------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру
// let cylinderArea =(p,r,h)=>2*p*h;
// console.log(cylinderArea(3.14,10,10));
//-------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrlog =(arr)=> {for(item of arr){console.log(item)}} ;
// arrlog([1,2,3,5,6,7,8,9,10,11,12]);
//-------------------------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = text => {
//     document.write("<p>");
//         document.write(text);
//     document.write("</p>")
// };
// paragraph('Hello Okten');
//-------------------------------------------------
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий;
// let createUl = text =>{
//     document.write('<ul>');
//     document.write("<li>")
//         document.write(text)
//     document.write("</li>")
//     document.write("<li>")
//         document.write(text)
//     document.write("</li>")
//     document.write("<li>")
//         document.write(text)
//     document.write("</li>")
//   document.write('/<ul>')
// };
// createUl('hello okten')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createUlLi= (text) =>{for(i=0; i<3; i++){
//     document.write('<ul>');
//     document.write('<li>');
//         document.write(text);
//     document.write('</li>');
//     document.write('</ul>');
//
//     }
// }
// createUlLi('Hello okten');

//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr= [1,2,3,{obj:'value'}, true, false];
// let creatorLi = arr => { for(item of arr){
//     document.write('<ul>');
//     document.write('<li>');
//     document.write(`${item}`);
//     document.write('</li>');
//     document.write('</ul>');
//     }
// };
// creatorLi(arr);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr= [{id:'1'},{name:'nazar'}, {age:21}];
// let objectVisioner = arr => {
//     for (item of arr) {
//         for (obj in item) {
//             document.write('<div>');
//             document.write(obj, ' : ',item[obj]);
//             document.write('</div>')
//         }
//     }
//     ;
// }
// objectVisioner(arr);