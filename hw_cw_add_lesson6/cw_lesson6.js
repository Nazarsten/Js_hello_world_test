//- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let corrector =(str,znak)=>{
//   let FinishArr =[];
//   if (str.includes(znak)){
//       let arr=(str.split(znak));
//       for( item of arr){
//           if (item)
//               FinishArr.push(item)
//       }
//   }
//     console.log(FinishArr.join(' '))
// };
// corrector(n2,'-');
//---------------------------------------------------------------------------------------------------------
//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let funcRandom =(diapazon)=>{
    emptyArr =[];
    for( i=0; i<20; i++){
        emptyArr.push(Math.round(Math.random()*100))
    }
     return emptyArr;
};
let newArr=funcRandom(100);
//--------------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let funcRandom =(diapazon)=>{
//     emptyArr =[];
//     for( i=0; i<diapazon; i++){
//         emptyArr.push(Math.round(Math.random()*100))
//     }
//     console.log(emptyArr.sort(function (a,b) { return a-b
//
//     }));
// };
// funcRandom(100);
//-------------------------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let funcRandom =(diapazon)=>{
//     emptyArr =[];
//     for( i=0; i<diapazon; i++){
//         emptyArr.push(Math.round(Math.random()*100))
//     }
//     console.log(emptyArr);
//     let filterArr =emptyArr.filter(element => element%2===0);
//     console.log(filterArr);
// };
// funcRandom(100);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randomString = funcRandom(100);
let stringArr =randomString.map(item => item.toString());
console.log(stringArr);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (arr,increaseOrReduce)=>{
    if( increaseOrReduce ==='asc'){
        console.log(arr.sort(function (a,b){return a-b}
        ))
    }else {
        console.log(arr.sort(function (a,b) {return b-a}
        ))
    };
};
sortNums(nums,'asc');
//-------------------------------------------------------------------------------------------------------------------------------------------------------
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let DurationsortArray =coursesAndDurationArray.sort(function (a, b) { return a.monthDuration-b.monthDuration
});
console.log(DurationsortArray);
//--------------------------------------------------------------------------------------------------------------------
let maxDuration5 = coursesAndDurationArray.filter(item=>item.monthDuration>5);
console.log(maxDuration5);
//---------------------------------------------------------------------------------------------------------------------