//  // TO DO HW
//   // Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
//   // Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//   // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//   // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с //
//   Пообідати - 1с // // І так далі

//------------------------------------- синхронізація з допомогою чистих колбеків


// function wakeUp(callback) {
//     setTimeout(()=>{
//         console.log('i am wake up 1');
//         callback();
//     },1000)
// }
//
// function brushTeeth(callback) {
//     setTimeout(()=>{
//         console.log('I am brush my teeth 2');
//         callback()
//     },200)
// }
//
// function wearing(callback) {
//     setTimeout(()=>{
//         console.log('i am wearing 4');
//         callback();
//     },2000)
//
// }
//
// function breakfast(callback){
//     setTimeout(()=>{
//         console.log( 'i am eating 3');
//         callback();
//     },2500)
// }
//
// function goToworK(callback){
//     setTimeout(()=>{
//         console.log(' i am going to my work 5');
//         callback();
//     },200)
// }
//
// function drinkTea(callback){
//     setTimeout(()=>{
//         console.log('i am drinking tea 6');
//         callback();
//     },50)
// }
//
// function working(callback){
//     setTimeout(()=>{
//         console.log('i am working now');
//         callback();
//     },300)
// }
//
//
// function haveDinner(calback){
//     setTimeout(()=>{
//         console.log('i am eating 8');
//         calback()
//     },100)
// }
//
// function goTOhome(){
//     setTimeout(()=>{
//         console.log('i going to home 10')
//     },20)
// }
// wakeUp(()=>{
//     brushTeeth(()=>{
//         breakfast(()=>{
//             wearing(()=>{
//                 goToworK(()=>{
//                     drinkTea(()=>{
//                         working(()=>{
//                             haveDinner(()=>{
//                                 working(()=>{
//                                     goTOhome()
//                                 })
//                             })
//                         })
//                     })
//                 })
//             });
//         })
//     });
// });
//---------------------------------------------Синхронізація з допомогою промісів



// function wakeUp(yes) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (yes){
//                 resolve('hooray new day')
//             }
//             reject('i am continue slipping')
//         },200)
//     })
// }
//
// function brushTeth(brush) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(brush){
//                 resolve('brush my teeth')
//             }
//             reject('buy new brush')
//         },20)
//     })
// }
//
// function wearing(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am wearing')
//         })
//     },50)
// }
// function breakFast(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(' i am eating now')
//         })
//     },200)
// }
//
// function goWork(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve( ' i going to work')
//
//         })
//     },400)
// }
//
// function drinkTea(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('no work i am drink tea now')
//         },100)
//     })
// }
//
// function work(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am working now')
//         })
//     },300)
// }
//
// function goHome() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am going to home')
//         })
//     },100)
// }
//
//
// function dinner(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i eating now')
//         })
//     },100)
// }
//
//
//
// wakeUp(true)
//     .then((iam)=>{
//         console.log(iam);
//         return brushTeth(true)
//     })
//
//     .then((yes)=>{
//     console.log(yes);
//         return wearing();
//     })
//
//     .then((responseWearing)=>{
//         console.log(responseWearing);
//         return breakFast();
//     })
//
//     .then((responseBreakfast)=>{
//         console.log(responseBreakfast);
//         return goWork();
//     })
//
//     .then((responsegoWork)=>{
//         console.log(responsegoWork);
//         return drinkTea();
//     })
//
//     .then((responseDrinkTea)=>{
//         console.log(responseDrinkTea);
//         return work()
//     })
//
//     .then((responseWork)=>{
//         console.log(responseWork);
//         return dinner()
//     })
//
//     .then((responseDinner)=>{
//         console.log(responseDinner);
//         return work()
//     })
//
//     .then((responseWork)=>{
//         console.log(responseWork);
//         return goHome()
//     })
//
//     .then((responseGoHome)=>{
//         console.log(responseGoHome)
//     })
//
//     .catch((reason)=>{
//         console.error('OOOPS', reason)
//     });


//---------------------------------------------------------
// синхронізація sync await
//
//
// function wakeUp() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am wake up')
//         },600)
//     })
//
// }
//
// function breakfast(){
//     return new Promise(resolve => {
//        setTimeout(()=>{
//           resolve('i am eating')
//        },200)
//     })
// }
//
// function wearing(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am wearing')
//         },400)
//     })
// }
//
// function goWork(){
//     return new Promise( resolve => {
//         setTimeout(()=>{
//             resolve('i am waiting a bus')
//         },500)
//     })
// }
//
// function drinkTea(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am driking tea now')
//         },50)
//     })
// }
// function work(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('i am working now')
//         }, 300)
//     })
// }
// function goHome(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("go home");
//         },20)
//     })
// }
// function study(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('studing')
//         },300)
//     })
// }
//
// async function schedule(){
//     const res6 = await work();
//     const res5 = await drinkTea();
//     const res4 = await goWork();
//     const res2= await wakeUp();
//     const res1=await breakfast();
//     const res3 = await wearing();
//     const res7 = await breakfast();
//     const res8 = await work();
//     const res9 = await goHome();
//     const res10 = await study();
//     console.log(res2);
//     console.log(res1);
//     console.log(res3);
//     console.log(res4);
//     console.log(res5);
//     console.log(res6);
//     console.log(res7);
//     console.log(res8);
//     console.log(res9);
//     console.log(res10);
// }
// schedule();
