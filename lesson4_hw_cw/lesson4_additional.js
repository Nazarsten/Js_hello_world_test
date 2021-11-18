//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function concat() {
//     let con='';
//     if(arguments.length==1){
//         console.log(arguments[0])
//     }else {
//         for (i=0; i<arguments.length;i++){
//              con=`${con}${arguments[i]}`
//         }
//
//     }
//     console.log(con)
// }
// concat(1,2,23,1,4);
//------------------------------------------------------------------------------------------------------
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE: [1,2,3,4], [2,3,4,5] результат [3,5,7,9]
//
// let arr1=[1,2,3,4];
// let arr2=[2,3,4,5];
// let arr3=[];
// function sum(arr1,arr2) {
// for(i=0; i<arr1.length; i++){
//     arr3[i]=arr1[i]+arr2[i];
// }
//     console.log('Масив доданих чисел = '+arr3)
// }
// sum(arr1,arr2);
//------------------------------------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr =[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrayKeys =[];
// function returnKeys(arr){
//     for (item of arr){
//         for( keys in item){
//             arrayKeys.push(keys)
//         }
//     }
//     console.log(arrayKeys)
// }
// returnKeys(arr);
//------------------------------------------------------------------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let arr =[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrayValues =[];
// function returnKeys(arr){
// for (item of arr){
//     for ( v in item){
//         arrayValues.push(item[v])
//     }
// }
//     console.log(arrayValues);
// }
// returnKeys(arr);