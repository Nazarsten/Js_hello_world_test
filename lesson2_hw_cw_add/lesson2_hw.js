// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let b = +prompt('vvedit chislo vid 1 do 60');
// if ( b >0 && b<16){
//     document.write('persha chvert')}
//     else if (b>=16 && b<31){
//     document.write('druha cvert')}
//     else if (b >=31 && b< 46){
//         document.write('tretia chvert')
//     }
//     else if(b>=46 && b<61){
//         document.write('chetverta cvert')
//
// }
//     else {
//         document.write('cvert unknown')
//     }
//------------------------------------------------------------------------
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// let day = 31;
// if (day >0 && day <11){
//     console.log('persha dekada')
// }else if (day >= 11 && day < 21){
//     console.log('druha dekada')
// } else if( day>= 21 && day <32){
//     console.log('tretia dekada')
// }
//----------------------------------------------------------------------------------------------------------
//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false.

// let test =false;
// if (test !== true){
//     console.log('Virno')
// }else {
//     console.log('Nevirno')}

//Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let a = false;
// let test =a!== true? 'Virno':'Nevirno';
// console.log(test);

//-----------------------------------------------------------------------------------------------------------
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 0;
// let test = a!==0? 'virno':'nevirno';
// console.log(test)
//------------------------------------------------------------------------------------------------------------
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
//
// let schedule =prompt('vvedit nazvu dnia?');
// let scheduleUpperorLower = schedule.toLowerCase();
// switch(scheduleUpperorLower) {
//     case 'monday':
//         document.write(
//             '1)math,2)physics, 3)art, 4)music,5)english - in Monday'
//         );
//         break;
//     case 'tuesday':
//         document.write(
//             '1)math,2)physics, 3)art, 4)music,5)english - in tuesday'
//         );
//         break;
//     case 'wednesday':
//         document.write(
//             '1)math,2)physics, 3)art, 4)music,5)english - in wednesday'
//         );
//         break;
//     case 'thursday':
//         document.write(
//             '1)math,2)physics, 3)art, 4)music,5)english - in thursday'
//         );
//         break;
//     case 'friday':
//         document.write(
//             '1)math,2)physics, 3)art, 4)music,5)english - in friday'
//         );
//
// }
//---------------------------------------------------------------------------------------------------------------
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let currentYear = 2021;
// if( currentYear % 4==0){
//     console.log('rik visokosniy')
// }else{
//     console.log('rik ne visokosniy')
// }
//----------------------------------------------------------------------------------------------------------------

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// questions=prompt('What official name of JavaScript?');
// if (questions.toLowerCase() =='ecmascript'){
//     document.write('You are right!!!')
// }else{
//     document.write('You dont know? -ECMAscript!!')
// }
//------------------------------------------------------------------------------------------------------------------



















// let a =115;
// let b = 3;
// if (a-b>0){
//     console.log(a)
//     }
//     else if(a-b == 0){
//             console.log('chisla rivni')}
