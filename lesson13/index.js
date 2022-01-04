



let formWrap = document.createElement('div');
document.body.append(formWrap);
formWrap.classList.add('wrapper');

let text = document.createElement('h2');
formWrap.appendChild(text);
text.innerText='Заповніть форму аби додати товар';

let formDiv = document.createElement('form');
let nameInput = document.createElement('input');
let quantityInput = document.createElement('input');
let prizeInput = document.createElement('input');
let imgInput = document.createElement('input');


formWrap.append(formDiv);
formDiv.appendChild(nameInput);
formDiv.appendChild(quantityInput);
formDiv.appendChild(prizeInput);
formDiv.appendChild(imgInput);

nameInput.setAttribute('placeholder','name');
quantityInput.setAttribute('placeholder','quantity');
prizeInput.setAttribute('placeholder','prize');
imgInput.setAttribute('placeholder','src of img');

let showProduct = document.createElement('button');
formWrap.appendChild(showProduct);
showProduct.innerText='Add';

let nextButton = document.createElement('button');
formWrap.appendChild(nextButton);
nextButton.classList.add('next_button');
nextButton.innerText='Products page';

nextButton.onclick = function(){
    window.location.href ='listProduct.html'
};


//let arrProducts =[];
showProduct.onclick=function () {
        if(nameInput.value===''||quantityInput.value ===''||prizeInput.value ===''||imgInput.value ===''){
            alert('Заповніть всі поля!!!!!');

        } else{

           localStorage.setItem(nameInput.value,JSON.stringify([
               {src:imgInput.value},
               {name:nameInput.value},
               {quantity:quantityInput.value},
               {prize:prizeInput.value}
               ]));

    for (input of document.getElementsByTagName('input')) {
        input.value ='';
        }
            alert('Товар був доданий успішно!!!!!')
    }

};


