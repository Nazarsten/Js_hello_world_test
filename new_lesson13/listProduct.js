
let parseInfo = JSON.parse(localStorage.getItem('data'));

let wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.classList.add('wrapper');


parseInfo.forEach(item=>{
    let card= document.createElement('div');
    wrapper.appendChild(card);
    card.classList.add('card');

    if(item.src){
       let img = document.createElement('img');
       card.appendChild(img);
       img.alt='картинка';
       img.src=item.src;
    }
   let cardsPart = document.createElement('div');
   card.appendChild(cardsPart);
   cardsPart.classList.add('cards_part');
   cardsPart.innerText=`
                       name:${item.name}
                       prize:${item.prize}
                       quantity:${item.quantity}
                       `;

    let button = document.createElement('button');
    cardsPart.appendChild(button);
    button.classList.add('buttonDeleteFromList');
    button.innerText ='Видалити з списку';



    button.onclick= function () {
        let forDeleting =item.src;
        let index = parseInfo.findIndex(item=>item.src === forDeleting);
        parseInfo.splice(index, 1);
        card.classList.toggle('hide');
        localStorage.setItem('data',JSON.stringify(parseInfo));
    };
});

let wrapperForButton = document.createElement('div');
wrapper.appendChild(wrapperForButton);
wrapperForButton.classList.add('wrapperForButton');

let buttonClear = document.createElement('button');
wrapperForButton.appendChild(buttonClear);
buttonClear.classList.add('buttonClear');
buttonClear.innerText ='Очистити список';

buttonClear.onclick=function () {
    localStorage.clear();
    window.location.reload();
    localStorage.setItem('data',JSON.stringify([]));

};

let buttonBack = document.createElement('button');
wrapperForButton.appendChild(buttonBack);
buttonBack.classList.add('buttonClear');
buttonBack.innerText ='Додати позицію';


buttonBack.onclick=function () {
    window.location.href='index.html'
};


































































