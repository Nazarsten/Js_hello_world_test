//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNumber=[];
// for ( i=0; i<6; i++){    ///- числовий масив
//     arrNumber.push(i)
// }
// console.log(arrNumber);


// let arrString=[];
// for(i=0; i<5; i++){           //- сирічковий масив
//     arrString.push('apple')
// }
// console.log(arrString);


// let arrDiferent=[];
// for(i=0; i<5; i++){
//     arrDiferent.push('apple')       //- масив з різними типами даних
//     arrDiferent.push(i)
//     arrDiferent.push(true)
// }
// console.log(arrDiferent.sort());
//-------------------------------------------------------------------------------------------------------------------

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let emptyArr=[];
// emptyArr[0]='apple';
// emptyArr[1]={id:1,name:'vasia',city:'Lviv'};
// emptyArr[2]=1234;
// emptyArr[3]=true;
// emptyArr[4]=[1,2,3,4,5,6,7,8,9,10];
// console.log(emptyArr);
//---------------------------------------------------------------------------------------------------------------------

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i =0; i<10; i++){
//     document.write('<div>hello okten</div>')
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (i =0; i<10; i++){
//     document.write(`<div>${i} hello okten</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<=20){
//     document.write('<h1> hello okten</h1>');
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<=20){
//     document.write(`<h1> ${i} hello okten</h1>`);
//     i++
// }
//------------------------------------------------------------------------------------------------------------

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr=[];
// for( i=0; i<=10; i++){  // -створив масив з 10 елементів
//    arr.push(i)
// }
// console.log(arr);
// for (item in arr){    //- вивів 10 елементів в консоль
//     console.log(item)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrString=[];
// for(i=0; i<=10; i++){
//     arrString.push('apple')
// }
// console.log(arrString);
// for ( item of arrString){
//     console.log(item)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrDiff=[];
// for(i=0; i<=10;i++){
//     arrDiff.push('apple');
//     arrDiff.push(12);
//     arrDiff.push(false)
// }
// console.log(arrDiff.sort());
// for (item of arrDiff){
//     console.log(item)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrDiff=[];
// for(i=0; i<=10;i++){
//     arrDiff.push('apple');
//     arrDiff.push(12);
//     arrDiff.push(false)
// }
// for( item of arrDiff){
//     if(typeof item =="boolean"){
//         console.log(item)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrDiff=[];
// for(i=0; i<=10;i++){
//     arrDiff.push('apple');
//     arrDiff.push(12);
//     arrDiff.push(false)
// }
// for( item of arrDiff){
//     if(typeof item =="number"){
//         console.log(item)
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrDiff=[];
// for(i=0; i<=10;i++){
//     arrDiff.push('apple');
//     arrDiff.push(12);
//     arrDiff.push(false)
// }
// for( item of arrDiff){
//     if(typeof item =="string"){
//         console.log(item)
//     }
// }
//---------------------------------------------------------------------------------------------------------------------

// //- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr=[];
// emptyArr[0]='apple';
// emptyArr[1]={id:1,name:'vasia',city:'Lviv'};
// emptyArr[2]=1234;
// emptyArr[3]=true;
// emptyArr[4]=[1,2,3,4,5,6,7,8,9,10];
// emptyArr[5]=1;
// emptyArr[6]='hello okten';
// emptyArr[7]=true;
// emptyArr[8]={nazar:'sten'};
// emptyArr[9]=12;
// for (item of emptyArr){
//     console.log(item)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i=0; i<=10; i++){
//     console.log(i);
//     document.write(i+',')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i=0; i<=100; i++){
//     console.log(i);
//     document.write(i+',')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i=0; i<=100; i+=2){
//     console.log(i);
//     document.write(i+',')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     document.write(i+',')}
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i);
//         document.write(i+',')}
// }