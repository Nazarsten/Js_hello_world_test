
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1. перебрати його циклом while
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++
// }- зворотній порядок
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// while (i>=0){
//     console.log(arr[i])
//     i--
// }
///----------------------------------------------------------------


// 2. перебрати його циклом for
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<arr.length; i++){
//     console.log(arr[i])
// }-в зворотньму напрямку
//  let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }
//--------------------------------------------------------------------

// 3. перебрати циклом while та вивести  числа тільки з парним індексом
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i<arr.length){
//     if(i%2 ==0){
//     console.log(arr[i])}
//     i++
// }
// }- в зворотньому напрямку
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i =arr.length-1;
// while ( i>=0){
//      if ( i%2 ==0)  {
//     console.log(arr[i])}
//     i--;
// }

//-----------------------------------------------------------------------------------------
// // // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=0; i<arr.length ;i++)
//     if (i%2!==0){
//         console.log(arr[i])
//     }
//- в зворотнньму напрямку
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=arr.length-1; i>=0; i--){
//     if (i%2!==0){
//         console.log(arr[i])
//     }
// }

//---------------------------------------------------------------------------

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i<arr.length){
//     if (i%2 ==0){
//         console.log(i)
//     }
//     i++
// }
//- в зворотньому порядку
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while (i>=0){
//     if (arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// i--;
// }
//---------------------------------------------------------------

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(item of arr){
//     if (item%2==0){
//         console.log(item)
//     }
//
// }
//--в зворотньму порядку
/*let arr =[2,17,13,6,22,31,45,66,100,-18];
for(i=arr.length-1; i>=0;){
    if (arr[i]%2==0){
        console.log(arr[i])
    }
    i--;
}*/
//-------------------------------------

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=0; i<=arr.length;i++){
//     if(arr[i]%3 ==0){
//         arr[i]='okten'
//     }
// }
// console.log(arr);

///-другий спосіб
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for ([k,v] of arr.entries()){
//     if (v%3 ==0){
//         arr[k]='okten'
//     }
// }
// console.log(arr);
//- в зворотньму порядку
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=arr.length-1; i>=0;i--){
//     if(arr[i]%3==0){
//         arr[i]='okten'
//     }
// }
// console.log(arr);
//-----------------------------------------------------------------------------------------

// 8. вивести масив в зворотньому порядку.
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

