//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         let bodyResponse = response.json();
//         return bodyResponse;
//     }).then(coments=>{
//         for(coment of coments){
//             let divPost = document.createElement('div');
//             document.body.append(divPost);
//             divPost.classList.add('post');
//
//             for (item in coment){
//                 let Post = document.createElement('div');
//                 divPost.appendChild(Post);
//                 Post.innerText =item+':'+coment[item];
//                 Post.style.borderTop ='1px solid orange';
//                 Post.style.margin ='5px'
//             }
//         }
//     });
// ----------------------------------------------------------------------------------------------
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(function (response) {
//     let jsonBody = response.json();
//     return jsonBody
// }).then(coments=>{
//    for( coment of coments){
//        let divComent = document.createElement('div');
//         document.body.append(divComent);
//         divComent.style.border ='1px solid black';
//         divComent.style.margin= '10px';
//
//         for( item in coment){
//             let atributeDiv = document.createElement('div');
//             divComent.appendChild(atributeDiv);
//             atributeDiv.innerText = item+':'+coment[item];
//             atributeDiv.style.border= '1px solid orange';
//             atributeDiv.style.margin='5px';
//             atributeDiv.style.padding = '5px'
//         }
//    }
// });
//---------------------------------------------------------------------------------------------------------