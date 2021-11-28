//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let arr=['hello world', 'lorem ipsum', 'javascript is cool'];
// for (item of arr){
//     console.log(item.length)
// }
//----------------------------------------------------------------
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// let arr=['hello world', 'lorem ipsum', 'javascript is cool'];
// for(item of arr){
//     console.log(item.toUpperCase())
// }
//------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arrUpper=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (item of arrUpper){
//     console.log(item.toLowerCase())
// }
//--------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//  let str = ' dirty string   ';
//  console.log(str.trim());
//---------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let stringToarray = arr => console.log(str.split(' '));
// stringToarray(str);
//-----------------------------------------------------------------------------------------
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let length = (str,index) => console.log(str.substring(0,index));
// length(str,7);
//-------------------------------------------------------------------------------------------
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash =(str)=>{
//     let newStr = str
//         .replace(/ /gi,'-')
//         .toUpperCase();
//     console.log(newStr)
// };
// insert_dash("HTML JavaScript PHP");
//---------------------------------------------------------------------------------------------
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
// let capFirstlett =(str)=>{
//     let cap = str.split(' ');
//     let newStr=[];
//     for( item of cap){
//         newStr.push(item[0].toUpperCase()+item.slice(1));
//     }
//     console.log(newStr);
// };
// capFirstlett(str);
//--------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'у якому кожне слово починається з великої літери';
// let capFirstlett =(str)=>{
//     let cap = str.split(' ');
//     let newStr=[];
//     for( item of cap){
//         newStr.push(item[0].toUpperCase()+item.slice(1))
//     }
//     console.log(  newStr.join(' '));
// };
// capFirstlett(str);
