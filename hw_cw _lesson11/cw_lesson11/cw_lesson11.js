//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до
// масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

 users.forEach(user =>{
     let userDiv = document.createElement('div');
     userDiv.classList.add('user');
     document.body.append(userDiv);
     userDiv.innerText =`${user.name}, ${user.age} ${user.status}`;

     let button = document.createElement('button');
     button.classList.add('button');
     button.innerText= 'додати до вибраних';
     userDiv.appendChild(button);

     button.onclick=function () {
         localStorage.setItem(`${user.name}`,`name:${user.name} age:${user.age} status:${user.status}`)
     }
 });


let buttonShow = document.createElement('button');
document.body.append(buttonShow);
buttonShow.innerText='переглянути вибрані';

buttonShow.onclick=function () {
    location.href='favorites.html'
};

