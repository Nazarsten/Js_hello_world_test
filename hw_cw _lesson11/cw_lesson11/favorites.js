
let keys = Object.keys(localStorage);
for(let key of keys) {
    let text=localStorage.getItem(`${key}`);
    let favUser = document.createElement('div');

    favUser.classList.add('user');
    document.body.append(favUser);
    favUser.innerText=text
}


let clear = document.createElement('button');
document.body.append(clear);
clear.innerText= 'clear';

clear.onclick=function () {
    localStorage.clear();
    window.location.reload()
};


