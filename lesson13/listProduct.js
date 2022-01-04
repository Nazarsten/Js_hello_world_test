

let wrap = document.createElement("div");
document.body.append(wrap);
wrap.classList='wrap';

for(let i =0; i<localStorage.length; i++){

     let currentArr= JSON.parse(localStorage.getItem(localStorage.key(i)));

    let card = document.createElement('div');
    wrap.appendChild(card);
    card.classList.add('card');

    for ( let item of currentArr){
        let cardspart = document.createElement("div");
        card.appendChild(cardspart);

        for ( let obj in item){
            if (obj =='src'){
                let img = document.createElement("img");
                cardspart.appendChild(img);
                img.src =item[obj];
                img.alt='картинка'
            }
            else {
            cardspart.innerText=`${obj}:${item[obj]}`}
        }
    }
    let button = document.createElement('button');
    card.appendChild(button);
    button.classList.add('buttonDeleteFromList');
    button.innerText ='Видалити з списку';

    button.onclick= function(){
        localStorage.removeItem(localStorage.key(i));
        window.location.reload();
    };
}
let wrapperForButton = document.createElement('div');
wrap.appendChild(wrapperForButton);
wrapperForButton.classList.add('wrapperForButton');

let buttonClear = document.createElement('button');
wrapperForButton.appendChild(buttonClear);
buttonClear.classList.add('buttonClear');
buttonClear.innerText ='Очистити список';

buttonClear.onclick=function () {
    localStorage.clear();
    window.location.reload();
};

let buttonBack = document.createElement('button');
wrapperForButton.appendChild(buttonBack);
buttonBack.classList.add('buttonClear');
buttonBack.innerText ='Додати позицію';


buttonBack.onclick=function () {
    window.location.href='index.html'
};




























