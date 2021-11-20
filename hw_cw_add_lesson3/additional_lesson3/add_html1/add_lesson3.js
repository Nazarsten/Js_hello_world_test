//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
// let arr=[];
// for (let i =0; i<=50; i++){
//     if (i%2==0){
//         arr.push(i)
//     }
// }
// console.log(arr);

//        b. заповнити його 50 непарними числами за допомоги циклу.
// let arr=[];
// for (let i =0; i<=50; i++){
//     if (i%2!==0){
//         arr.push(i)
//     }
// }
// console.log(arr);
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr=[];
// for(let i=0; i<=20; i++){
//     arr.push(Math.round(Math.random()*10000))
// }
// console.log(arr);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr=[];
// for(let i=0; i<=20;i++){
//     arr.push(Math.random()*(732-8)+8)
// }
// console.log(arr)
//---------------------------------------------------------------------------------------------------------------------

// 2. Вивести за допомогою console.log кожен третій елемен
//let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// for (item of arr){
//     if( item%3==0){
//     console.log(item)}
// }
//----------------------------------------------------------------------------------------------------------------------
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// for(let i =0; i<=arr.length ; i+=3){
//     if( i%2==0){
//         console.log(i)
//     }
// }
//---------------------------------------------------------------------------------------------------------------------
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// let newArr=[];
// for(let i =0; i<=arr.length ; i+=3){
//     if( i%2==0){
//         newArr.push(i)
//     }
// }
// console.log(newArr);
//-----------------------------------------------------------------------------------------------------------------------
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr2=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//     for(let i =0 ; i<= arr2.length; i++){
//         if(arr2[i]%2==0){
//             console.log(arr2[i-1])
//         }
//     }
//----------------------------------------------------------------------------------------------------------------------
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let avgPrice=0;
// let arr3=[100,250,50,168,120,345,188];
// for(let i=0;i<arr3.length; i++){
//     avgPrice= avgPrice+arr3[i]/arr3.length;
// }
// console.log(avgPrice);
//----------------------------------------------------------------------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let newArr=[];
// let copyNewArray=[];
// for( let i=0;i<=10; i++){
//     newArr[i] =Math.round(Math.random()*10);
//     newArr[i]=newArr[i]*5;
//     copyNewArray[i]=newArr[i]
// }
// console.log(newArr);
// console.log(copyNewArray);

//-----------------------------------------------------------------------------------------------------------------------

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//  let difArray=[1,2,3, 'true', true, 23,7, {object:'object'}, 'anythink'];
// let newArr=[];
// for(let i=0; i<difArray.length; i++){
//     if(typeof difArray[i]==='number'){
//         newArr.push(difArray[i])
//     }

//---------------------------------------------------------------------------------------------------------------------
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let newArray=[];
// for (let i=0; i<usersWithId.length ; i++){
//     for (let j =0; j<citiesWithId.length ; j++){
//         if( usersWithId[i].id ===citiesWithId[j].user_id)
//         {
//             usersWithId[i].address = citiesWithId[j];
//         }
//     }
// }
// newArray.push(usersWithId);
// console.log(newArray);
// for (item of newArray){
//     console.log()
// }
///---------------------------------------------------------------------------------------------------------------------
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// // for(item of arr){
// //     if (item%2==0){
// //         console.log(item)
// //     }
// // }
//-----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newarr=[];
// for(  let i=0;i<arr.length;i++){
//     newarr[i]=arr[i]
// }
// console.log(newarr);
// console.log(arr);
// //-------------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c']
// let word='';
// for(i=0; i<arr.length; i++){
//     word=`${word}`+arr[i]
// }
// console.log(word);
//---------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let word='';
// i=0;
// while( i<arr.length){
//     word= `${word}`+arr[i];
//     i++;
// }
// console.log(word);
//----------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let word='';
// for(item of arr){
//     word=`${word}`+item
// }
// console.log(word)
//------------------------------------------------------------------------------------------------------------------
//
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
for (item of usersList){
    document.write("<div class='user_box'>");
            document.write("<div class='user_block'>");
                document.write("<h2>");
                    document.write("<span class='span'>")
                    document.write(item.id);
                    document.write("</span>")
                    document.write(item.name +' '+ item.username);
                document.write("</h2>");
                document.write("<h3>");
                    document.write('Email:'+item.email);
                    document.write('<br>');
                    document.write( 'Phone:'+ item.phone);
                document.write("</h3>");
                document.write("<div class='adress_block'>");
                    document.write("<p>"); document.write("City:"+item.address.city); document.write("</p>");
                    document.write("<p>"); document.write("Street:"+item.address.street); document.write("</p>");
                    document.write("<p>"); document.write("Suite:"+item.address.suite); document.write("</p>");
                     document.write("<p>"); document.write("Zip-code:"+item.address.zipcode); document.write("</p>");
                document.write("</div>");
            document.write("</div>")
    document.write("</div>")
}