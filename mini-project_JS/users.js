


fetch(' https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    let bodyUsers =response.json();
    return bodyUsers

}).then(users =>{

    let wrap = document.createElement('div');
    document.body.append(wrap);
    wrap.classList.add('wrap');

    users.forEach(user=>{
        let userDiv = document.createElement('div');
        wrap.appendChild(userDiv);
        userDiv.innerText= `${user.id} ${user.name}`;
        userDiv.classList.add('users');

        let userButton = document.createElement('button');
        userDiv.appendChild(userButton);
        userButton.innerText='About user';
        userButton.classList.add('about_user');

        userButton.onclick=function (){
            localStorage.setItem("users", JSON.stringify(user.id));
            window.location.href ='detailsUser.html';
        }
    })

});
